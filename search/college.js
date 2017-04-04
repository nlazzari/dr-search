const request       = require('request-promise-native');
const cheerio       = require('cheerio');
const queryString   = require('querystring');
const human         = require('humanparser');

const URL_BASE   = 'https://www.cpsbc.ca';
const URL_PATH   = '/physician_search';
const URL_SEARCH = `${URL_BASE}${URL_PATH}`;
let $            = cheerio.load('<div></div>');

const REQUEST_TIMEOUT_MS = 20000;

// This object will be serialized into query strings for building the search URL
//  ie. ?filter_first_name=Joe&filter_last_name=Blo&....
let queryParamsObject = {
        filter_first_name: '',
        filter_last_name: '',
        filter_city: '',
        filter_gp_or_spec: 'G',
        filter_specialty: '',
        filter_accept_new_pat: '1',
        filter_gender: '',          // 'M' or 'F' (blank for both)
        filter_active: 'Y',
        filter_radius: '',
        filter_postal_code: '',
        filter_language: '',
        filter_nonce: '',
        page: '0'
}


// jQuery/CSS selector strings for parsing page data with Cheerio.
// '_REL' strings are relative to the base string 'SELECTOR_RESULT_ROW'
// ie. 'td > a' means relative to the
//              full string `${SELECTOR_RESULT_ROW} td > a`
const SELECTOR_RESULT_ROW     = '#college-physio-search tbody tr';
const SELECTOR_PAGE_LIST      = 'ul.pager.inline.item-list li';
const SELECTOR_REL_FULL_NAME  = 'td > a';
const SELECTOR_REL_CONTACT    = 'ul.address-list li';
const SELECTOR_REL_GENDER     = 'td:nth-child(3)';
const SELECTOR_REL_LANGUAGE   = 'td:nth-child(5) li';
const SELECTOR_FORM_TOKEN     = '[name="filter[nonce]"]';

////////// FUNCTIONS /////////////////

// Returns an array of all table row elements containing the result data
function getResultRowElements() {
  return $(SELECTOR_RESULT_ROW);
}

// Returns the number of results. Gives an accurate count for cases with
// no results, or null results from lack of a nonce token
function numResultRows() {
  return getResultRowElements().length;
}

// Number of page results (index 0+)
// If there is one result, it is accurate,
// If > 1 the last element is a 'next' link, so ignore it
function numPageResults() {
  const pages = $(SELECTOR_PAGE_LIST).length;

  if(pages === 1) {
    return pages;
  }
  else {
    return pages - 1;
  }
}

function parseFormTokenToQueryParams() {
    queryParamsObject.filter_nonce = $(SELECTOR_FORM_TOKEN).attr('value');
    return queryParamsObject.filter_nonce;
}

function parseNameString(rowElement) {
  const parsedName      = $(rowElement).find(SELECTOR_REL_FULL_NAME)[0]
                                       .children[0].data;
  const lastName        = parsedName.split(', ')[0];
  const firstMiddleName = parsedName.split(', ')[1].split(' »')[0];
  const fullName        = `${firstMiddleName} ${lastName}`;
  const nameObject      = human.parseName(fullName);

  return {
            first: nameObject.firstName,
            middle: nameObject.middleName ? nameObject.middleName : '',
            last: nameObject.lastName,
         };
}

// Given a contact li element, return an array of address line strings
function parseAddressLines(li) {
  let address = [];
  li.children[0].children.forEach((line) => {
    if(line.type === 'text') {
      address.push(line.data);
    }
  });
  return address;
}

// Given a contact li element, return phone number (if it exists) as a
// string with non numerical characters removed
function parsePhoneNumber(li) {
  return      li.lastChild.data                      ?
            `${li.lastChild.data}`.replace(/\D/g,'') : '';
}

function parseContactInfo(rowElement) {
  // array of li elements containing contact info (address, and phonenumber)
  const contactListEls  = $(rowElement).find(SELECTOR_REL_CONTACT);
  const numContacts     = contactListEls.length; //number of addresses/phone#'s
  let   contactList     = []; // store each set of contact info (address, phone)

  // Loop through each set of contact info (address and phone number)
  for(let i = 0; i < numContacts; i++) {
    // Get the array of address line strings
    let address = parseAddressLines(contactListEls[i]);

    // Get the phone number if there is one listed
    let phone  = parsePhoneNumber(contactListEls[i]);

    // Only save addresses that are in BC to the contactList array
    if(/BC/.test(address.join(' '))) {
        contactList.push({
          streetAddress:  address.slice(0, address.length-2).join(',') ,
          city:           address[address.length-2].split(', ')[0] ,
          province:       address[address.length-2].split(', ')[1] ,
          postalCode:     address[address.length-1],
          phoneNumber:    phone
        });
    }
  }
  return contactList;
}

function parseGenderString(rowElement) {
  return $(rowElement).find(SELECTOR_REL_GENDER)[0].children[0].data;
}

function parseLanguageStrings(rowElement) {
  const languageCell =  $(rowElement).find(SELECTOR_REL_LANGUAGE);

  let languageStrings = [];
  // let languageElements = [];

  if(languageCell.length > 0) {

    for(let i = 0; i < languageCell.length; i++) {
      languageStrings.push(languageCell[i].children[0].data);
    }
  }
  return languageStrings.join(',');
  // return languageCell;
}

function parseOneRowObject(row) {
  const name      = parseNameString(row);

  return {
            firstName:  name.first,
            middleName: name.middle,
            lastName:   name.last,
            gender:     parseGenderString(row),
            languages:  parseLanguageStrings(row),
            contactInfo:  parseContactInfo(row)
          };
}

// Returns an array of parsed data objects (Doctor information)
function parseAllRowsObjects() {
  const rows      = getResultRowElements();
  const numRows   = rows.length;
  let   results   = [];

  for(let i = 0; i < numRows; i++) {
    results.push( parseOneRowObject(rows[i]) );
  };

  return results;
}
/////////// REQUESTS //////////////

function requestPageData(queryParams) {
  const { firstName='', lastName='',  city='',
          gender='',    radius='',    postalCode='',
          language='' } = queryParams;
  let     resultsData = [];

  queryParamsObject.filter_first_name   = firstName;
  queryParamsObject.filter_last_name    = lastName;
  queryParamsObject.filter_city         = city;
  queryParamsObject.filter_gender       = gender;
  queryParamsObject.filter_radius       = radius;
  queryParamsObject.filter_postal_code  = postalCode;
  queryParamsObject.filter_language     = language;



  return (
  // Request #1: Parse Form Token
  request.get({
    	url: URL_SEARCH,
    	jar: true,
      timeout: REQUEST_TIMEOUT_MS
    })
      .then(html => {
        $ = cheerio.load(html);
        let body = $('body');
        const formToken = parseFormTokenToQueryParams();

        // Request #2: Get first page of results, and determine number of pages
        return request.get({
            url:  `${URL_SEARCH}?${queryString.stringify(queryParamsObject)}`,
            jar: true,
            timeout: REQUEST_TIMEOUT_MS
          });
      })
      .then(htmlResult => {
        $                 = cheerio.load(htmlResult);
        body              = $('#college-physio-search').html();
        let results       = parseAllRowsObjects();
        let numRows       = results.length;
        let numPages      = numPageResults();
        resultsData       = resultsData.concat(results);

        // Request #3+ : Create array of Request promises to return
        let requestPromises = [];
        for(let page = 1; page < numPages; page++) {
            queryParamsObject.page = `${page}`;
            requestPromises.push(
              request.get({
                  url:  `${URL_SEARCH}?${queryString
                                            .stringify(queryParamsObject)}`,
                  jar: true,
                  timeout: REQUEST_TIMEOUT_MS
                }));
        }

        return Promise.all(requestPromises);
      })
      .then(htmlPageArray => {
          htmlPageArray.forEach(htmlPage => {
              $                 = cheerio.load(htmlPage);
              const pageResults = parseAllRowsObjects();
              resultsData       = resultsData.concat(pageResults);
          });

          // return new Promise((resolve, reject) => { resolve(resultsData) });
          return resultsData;
      })
    );

}

// requestPageData({city: 'Vancouver', gender: 'F'})
// .then(results => {
//   console.dir( results , { depth: null });
// })
// .catch(error => {
//   console.log('Errors: ', error);
// });

module.exports = requestPageData;

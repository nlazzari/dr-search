// const Express       = require('express');
// const router        = Express.Router();
const request       = require('request-promise-native');
const cheerio       = require('cheerio')
const queryString   = require('querystring');

let $ = cheerio.load('<div></div>');
var resultsData = [];

const URL_BASE   = 'https://www.cpsbc.ca';
const URL_PATH   = '/physician_search';
const URL_SEARCH = `${URL_BASE}${URL_PATH}`;

// jQuery/CSS selector strings.
// '_REL' strings are relative to the base string 'SELECTOR_RESULT_ROW'
// ie. 'td > a' means relative to the
//              full string `${SELECTOR_RESULT_ROW} td > a`
const SELECTOR_RESULT_ROW     = '#college-physio-search tbody tr';
const SELECTOR_PAGE_LIST      = 'ul.pager.inline.item-list li';
const SELECTOR_REL_FULL_NAME  = 'td > a';
const SELECTOR_REL_ADDRESS    = 'div.physio-address-data';
const SELECTOR_REL_PHONE      = 'ul.address-list li';
const SELECTOR_REL_GENDER     = 'td:nth-child(3)';
const SELECTOR_REL_LANGUAGE   = 'td:nth-child(5) li';
const SELECTOR_FORM_TOKEN     = '[name="filter[nonce]"]';

// This object will be serialized into query strings for building the search URL
//  ie. ?filter_first_name=Joe&filter_last_name=Blo&....
let queryParamsObject = {
        filter_first_name: '',
        filter_last_name: '',
        filter_city: 'Vancouver',
        filter_gp_or_spec: 'G',
        filter_specialty: '',
        filter_accept_new_pat: '1',
        filter_gender: '',
        filter_active: 'Y',
        filter_radius: '',
        filter_postal_code: '',
        filter_language: '',
        filter_nonce: '',
        page: '0'
}

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
  const parsedName = $(rowElement).find(SELECTOR_REL_FULL_NAME)[0]
                                  .children[0].data;
  const lastName = parsedName.split(', ')[0];
  const firstMiddleName = parsedName.split(', ')[1].split(' »')[0];

  return `${firstMiddleName} ${lastName}`;
}

function parseAddressString(rowElement) {
  let address = [];
  $(rowElement).find(SELECTOR_REL_ADDRESS)[0].children.forEach((line) => {
    if(line.type === 'text') {
      address.push(line.data);
    }
  });

  return address.join(',');
}

function parsePhoneString(rowElement) {
  return $(rowElement).find(SELECTOR_REL_PHONE)[0]
                      .lastChild.data.replace(/\D/g,'');
}

function parseGenderString(rowElement) {
  return $(rowElement).find(SELECTOR_REL_GENDER)[0].children[0].data;
}

function parseLanguageStrings(rowElement) {
  const languageCell =  $(rowElement).find(SELECTOR_REL_LANGUAGE);//[0];//.children[0].data;
                                    //  .children[0].children[0];
  let languageStrings = [];
  let languageElements = [];

  if(languageCell.length > 0) {

    for(let i = 0; i < languageCell.length; i++) {
      languageStrings.push(languageCell[i].children[0].data);
    }
  }
  return languageStrings;
  // return languageCell;
}

function parseOneRowObject(row) {
  return {
            name:     parseNameString(row),
            address:  parseAddressString(row),
            phone:    parsePhoneString(row),
            gender:   parseGenderString(row),
            language: parseLanguageStrings(row)
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

// Request #1: Parse Form Token
request.get({
  	url: URL_SEARCH,
  	jar: true
  })
    .then(html => {
      $ = cheerio.load(html);
      let body = $('body');
      const formToken = parseFormTokenToQueryParams();

      // Request #2: Get first page of results, and determine number of pages
      return request.get({
          url:  `${URL_SEARCH}?${queryString.stringify(queryParamsObject)}`,
          jar: true
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
                jar: true
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
    })
    .then(() => {
      console.log(resultsData);
    })
    .catch(error => {
      console.log('Errors: ', error);
    });

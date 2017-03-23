const Express       = require('express');
const router        = Express.Router();
const request       = require('request');
const cheerio       = require('cheerio')
const queryString   = require('querystring');

let $ = cheerio.load('<div></div>');

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
        page: ''
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

  return address.join('\n');
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


/////////// REQUESTS //////////////

request.get({
  	url: URL_SEARCH,
  	jar: true
  },
    (error, response, html) => {
      if(error) {
        console.log('error:', error); // Print the error if one occurred
      }
      else {
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);

            $ = cheerio.load(html);
        let body = $('body');
        let nonce = $(SELECTOR_FORM_TOKEN).attr('value');
        queryParamsObject.filter_nonce = nonce;
        console.log('Nonce token: ', nonce);

        request.get({
          	url:  `${URL_SEARCH}?${queryString.stringify(queryParamsObject)}`,
          	jar: true
          },
            (error, response, htmlResult) => {
              if(error) {
                console.log('error:', error); // Print the error if one occurred
              }
              else {

                $ = cheerio.load(htmlResult);
                let nonce2 = $(SELECTOR_FORM_TOKEN).attr('value');
                body = $('#college-physio-search').html();
                console.log('Nonce token (request #2):', nonce2);
                console.log('\n\n', body);

                      let rows      = getResultRowElements();
                      let numRows   = numResultRows();
                      let numPages  = numPageResults();

                  function logData(row) {
                      let name      = parseNameString(row);
                      let address   = parseAddressString(row);
                      let phone     = parsePhoneString(row);
                      let gender    = parseGenderString(row);
                      let language  = parseLanguageStrings(row);

                      // console.log(numRows);
                      // console.log(numPages);
                      console.log(name);
                      console.log(address);
                      console.log(phone);
                      console.log(gender);
                      console.log(language);
                      console.log('\n\n');
                    }

                    for(let i = 0; i < numRows; i++) {
                      logData(rows[i]);
                    };

              }
        });



    }
});


// router.get('/', function(req, res) {
//   res.render('new');
// });

// when this file is required, it will receive the object
// assigned to module.exports
module.exports = router;



// Check to see if there are results (must be >= 2),
// document.querySelector('#college-physio-search').childElementCount
// == 2 (one result)
// == 1 (no results)
// == 0 (invalid token)

// Grabbing array of result rows
// document.querySelectorAll('#college-physio-search tbody tr')

// Number of results in table:
// document.querySelectorAll('#college-physio-search tbody tr').length

// Search result links (index 0 - 9), 10 results max per page
// https://www.cpsbc.ca/physician_search_result/0

// Number of page results (index 0+)
// If one result, it is accurate, if > 1 the last element is
// document.querySelectorAll('ul.pager.inline.item-list li').length


///// RESULT PARSING //////////

// Select one result row:
// let resultRow = document.querySelector('#college-physio-search tbody tr')

// Last , First Name :
// document.querySelector('#college-physio-search tbody tr td > a').innerText

// Address
// document.querySelector('#college-physio-search tbody tr div.physio-address-data').innerText

// Phone number
// document.querySelector('#college-physio-search tbody tr ul.address-list li').lastChild

// Gender
// document.querySelector('#college-physio-search tbody tr td:nth-child(3)').innerText








/////////////////

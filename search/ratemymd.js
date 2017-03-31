const request       = require('request-promise-native');
const cheerio       = require('cheerio');
const queryString   = require('querystring');
const human         = require('humanparser');

let $               = cheerio.load('<div></div>');


// jQuery/CSS selector strings for parsing page data with Cheerio.
// '_REL' strings are relative to the base string 'SELECTOR_'
// ie. 'td > a' means relative to the
//              full string `${SELECTOR_RESULT_ROW} td > a`
const SELECTOR_RESULT_ROW = 'div#doctor-list div.search-item.doctor-profile';
const SELECTOR_REL_STAR_RATING = 'span.star-rating'; //title

////////// FUNCTIONS /////////////////

// Returns an array of all table row elements containing the result data
function getResultRowElements() {
  return $(SELECTOR_RESULT_ROW);
}

// Returns the floating point star rating from a row result search element
function getStarRating(rowElement) {
  const ratingSpan = $(rowElement).find(SELECTOR_REL_STAR_RATING)[0];
  return parseFloat(ratingSpan.attribs.title);
}  

/////////// REQUESTS //////////////

function requestPageData(queryParams) {
  const { firstName='', lastName='',  city='Vancouver' } = queryParams;
  const URL_BASE   = 'https://www.ratemds.com';
  const URL_PATH   = `/best-doctors/bc/` +
                     `${city.toLowerCase().replace(' ', '-')}/family-gp/`;
  const URL_SEARCH = `${URL_BASE}${URL_PATH}`;
  let  resultsData = [];

  // This object will be serialized into query strings for building the
  // search URL   ie. ?text=joe%20blo
  let queryParamsObject = {
          text: `${firstName.toLowerCase()} ${lastName.toLowerCase()}`
  }


  return (

  request.get({
    	url: `${URL_SEARCH}?${queryString.stringify(queryParamsObject)}`,
    	jar: true
    })
      .then(html => {
        $ = cheerio.load(html);
        let resultRows = getResultRowElements();

        console.log( getStarRating(resultRows[0]) );
      })

    ); //   /return

}

// https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=lauren%20fineman

// requestPageData({city: 'Surrey', gender: 'F'})
// .then(results => {
//   console.dir( results , { depth: null });
// })
// .catch(error => {
//   console.log('Errors: ', error);
// });

module.exports = requestPageData;

const cheerio   = require('cheerio');
const doctors   = require('./doctors');
const college   = require('../search/college');
const rateMyMD  = require('../search/ratemymd');

let $ = cheerio.load('<div></div>');

// console.log(doctors[10]);

// college({city: 'Surrey', gender: 'F'})
// .then(results => {
//   console.dir( results , { depth: null });
// })
// .catch(error => {
//   console.log('Errors: ', error);
// });

rateMyMD({city: 'Vancouver', firstName: 'Lauren', lastName: 'Fineman' })
  .then( results => {
    // console.dir();
  });

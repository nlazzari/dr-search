// Scrape doctor data given query information, and save it all to the database

// This script will do the following:
// 1) Request search results from the BC College of Surgeons website
// 2) Return an array of results scraped from all pages from 1)
// 3) Request and scrape ratings for each doctor in 2) from RateMyMD
// 4) Append the ratings data to the array of doctor data from 2)
// 5) Append all restults into a text file ( ../data/doctorData.js)

// Note: last city scraped: index 50

// Page scraping scripts
const college   = require('../search/college');
const rateMyMD  = require('../search/rateMyMD');

// File I/O
const file            = require('fs-promise');
const doctorDataFile  = 'doctorData.dat';
const arg             = process.argv[2]; //commandline argument

// Constants
const cityList = require('../data/cities').list;
const cityArg  = cityList[parseInt(arg)]; // city chosen by the index argument


// Functions :

function fileAppend(fileName, data) {
  return file.appendFile(__dirname + '/../data/' + fileName, data);
}

function fileRead(fileName) {
  return file.readFile(__dirname + '/../data/' + fileName, {encoding:'utf8'});
}

function scraper(queryParams) {
  const { city='', gender='', radius='',
          postalCode='',  language='' } = queryParams;

  let     completeResults = [];

    return(
      college({city: city, gender: gender})
      .then(doctors => {
        const ratingPromises = [];

        // Make requests to get rating results from
        // each doctor in the doctors array
        doctors.forEach(doctor => {
          ratingPromises.push(rateMyMD({
            city: city,
            firstName: doctor.firstName,
            lastName: doctor.lastName
          }));
        });
        completeResults = doctors;

        return Promise.all(ratingPromises);
      })
      .then(ratings => {
        // Append rating data to each doctor record
        completeResults.forEach((doctor, i, arr) => {
          doctor.rateMyMDRating = ratings[i];
        });

        return completeResults;
        // return (new Promise((resolve, reject) => { resolve(completeResults) }));
      })
    );
}

// Scrape data for the city passed by argument, and append it to the data file
scraper({city: cityArg})
      .then(results => {
        console.dir(results, { depth: null });
        return fileAppend(doctorDataFile, `${JSON.stringify(results)},\n` );
      })
      .then( err => {
        if (err) throw err;

        console.log(`\n\nThe data for ${cityArg} was ` +
                    `appended to ${doctorDataFile}`);
        process.exit();
      })
      .catch(err => {
        console.log(err);
        process.exit();
      });



///

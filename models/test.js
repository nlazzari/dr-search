// Testing out different query methods to use in the api routes 

// Database connection
const knex  = require('../config/database');  // Create the knex connection
const Model = require('objection').Model;
      Model.knex(knex); // Bind all Models to a knex instance

const helper    = require('../helpers/apiHelpers');
const Doctor    = require('./Doctor');
const DoctorContact    = require('./DoctorContact');

const PAGE_SIZE = 10;
const DEFAULT_CITY = '';

const pageNumber = 0;
const city = 'Vancouver'
const gender = undefined;
const language = undefined;

const contactsSubQuery = DoctorContact
  .query()
  .whereRef('DoctorId', '=', 'Doctor.id')
  .where('city', city);

const doctors = Doctor
  .query()
  .eager('[contactInfo, rateMyMDRating]')
  .whereExists(contactsSubQuery)

  // .modifyEager('contactInfo', builder => {
  //   builder.where('city', city);
  // })
  // Filter by some field on the relation table that would not be NULL if the JOIN worked
  // This would not be needed if the eager could be made to NOT use a left join, but I don't know how to do that
  // .whereNotNull('contactInfo.city')
  .skipUndefined()
  .orderBy('lastName')
  .then(docs => {

    const response = {
                      doctors: docs,
                      city: city,
                      page:pageNumber,
                      pageCount: helper.pageCount(docs, PAGE_SIZE),
                      resultsCount: docs.length
                    };

    console.log('response:\n\n');
    console.dir( response.doctors, { depth: null });
    // console.log( response.doctors[0].contactInfo[0].streetAddress );
    process.exit();

  })
  .catch(err => {
    console.log('Error:', err);
    process.exit();
  });

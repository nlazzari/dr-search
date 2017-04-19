// This script saves doctorData (a Javascript constant array of data)
// into the database

// Database connection
const knex  = require('../config/database');  // Create the knex connection
const Model = require('objection').Model;
      Model.knex(knex); // Bind all Models to a knex instance

const Doctor            = require('../models/Doctor');
const DoctorContact     = require('../models/DoctorContact');
const RateMyMDRating    = require('../models/RateMyMDRating');

const doctorSeedData        = require('../data/doctorSeedData');

Doctor
  .query()
  .allowInsert('[contactInfo, rateMyMDRating]') // allow eager on relational data
  .insertGraph(doctorSeedData)      // batch insertion of all doctor data
  .then((returnStuff) => {
    console.log(returnStuff);
    console.log('Successfully seeded database.');
    process.exit();
  })
  .catch(err => {
    console.log('Error seeding:', err);
    process.exit();
  });

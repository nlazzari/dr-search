// Database connection
const knex  = require('../config/database');  // Create the knex connection
const Model = require('objection').Model;
      Model.knex(knex); // Bind all Models to a knex instance

const Doctor            = require('../models/Doctor');
const DoctorContact     = require('../models/DoctorContact');
const RateMyMDRating    = require('../models/RateMyMDRating');

const doctorData        = require('../data/doctorData');

Doctor
  .query()
  .allowInsert('[contactInfo, rateMyMDRating]') // allow eager on relational data
  .insertGraph(doctorData)      // batch insertion of all doctor data
  .then((returnStuff) => {
    console.log('Success!');
    console.log(returnStuff);
    process.exit();
  })
  .catch(err => {
    console.log('Error:', err);
    process.exit();
  });

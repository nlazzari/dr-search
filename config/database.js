// This file loads database package requirements and configurations,
// connects to the database, and exports the connection for use elsewhere
// in the application

const env        = require('./env');
const Knex       = require('knex');

// Load the knex configuration specified by the environment variables
const knexConfig = require('./knexfile')[process.env.NODE_ENV || 'development'];
const knex       = Knex(knexConfig); // Initialize knex.



// Export the knex connection for use with Objection Models
module.exports = knex;

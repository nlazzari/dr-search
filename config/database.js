// Database package requirements and configuration
const Knex        = require('knex');
const knexConfig  = require('./knexfile');
const knex        = Knex(knexConfig.development); // Initialize knex.



// Export the knex connection for use with Objection Models
module.exports = knex;

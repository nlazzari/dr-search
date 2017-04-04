exports.up = function(knex) {
  return knex.schema
    .createTable('Doctors', function (table) {
      table.increments('id').primary();
      table.string('firstName');
      table.string('middleName');
      table.string('lastName');
      table.string('gender');
      table.string('languages');
      table.timestamp('createdAt');
      table.timestamp('updatedAt');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('Doctors');
};

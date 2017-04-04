exports.up = function (knex) {
  return knex.schema
    .createTable('RateMyMDRatings', function (table) {
      table.increments('id').primary();
      table.integer('DoctorId').unsigned().references('id').inTable('Doctors');
      table.float('starRating');
      table.string('profileLink');
      table.string('searchLink');
      table.integer('resultsCount');
      table.timestamp('createdAt');
      table.timestamp('updatedAt');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('RateMyMDRatings');
};

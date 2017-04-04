exports.up = function (knex) {
  return knex.schema
    .createTable('Cities', function (table) {
      table.increments('id').primary();
      table.string('city');
      table.timestamp('createdAt');
      table.timestamp('updatedAt');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('Cities');
};

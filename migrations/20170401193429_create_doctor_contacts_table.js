exports.up = function(knex) {
  return knex.schema
    .createTable('DoctorContacts', function (table) {
      table.increments('id').primary();
      table.integer('DoctorId').unsigned().references('id').inTable('Doctors');
      table.string('streetAddress');
      table.string('city');
      table.string('postalCode');
      table.string('phoneNumber');
      table.timestamp('createdAt');
      table.timestamp('updatedAt');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('DoctorContacts')
};

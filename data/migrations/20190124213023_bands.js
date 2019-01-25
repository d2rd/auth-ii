
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bands', table => {
    table.increments();
    table.string('bandName').notNullable().unique();
    table.string('bandInitials').unique();
    table.integer('musicianCount');
    table.string('genre')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bands');
};

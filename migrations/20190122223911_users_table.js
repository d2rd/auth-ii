
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.string('department');
  }) 
};

exports.down = function(knex, Promise) {
  
};

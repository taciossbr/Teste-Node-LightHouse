
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('username', 40).unique().notNullable()
    table.string('first_name', 40).notNullable()
    table.string('last_name', 80).notNullable()
    table.string('email', 120).unique().notNullable()
    table.string('phone', 20).notNullable()
    table.string('password_hash', 60).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};

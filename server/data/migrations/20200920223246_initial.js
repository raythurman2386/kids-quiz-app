exports.up = async function (knex) {
  await knex.schema.createTable('users', tbl => {
    tbl.increments('id');
    tbl.string('username', 128).unique().notNullable();
    tbl.string('password', 128).notNullable();
    tbl.string('email', 128).unique().notNullable();
    tbl.string('role', 128).notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('users');
};

exports.up = async function (knex) {
  await knex.schema.createTable('tests', tbl => {
    tbl.increments('id');
    tbl.integer('user_id');
    tbl.foreign('user_id').references('users.id');
    // Test will need questions
    // Foreign key that will
    // Reference a user id
    // Timestamps
    // Test type?
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('tests');
};

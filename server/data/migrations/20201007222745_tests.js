exports.up = async function (knex) {
  await knex.schema.createTable('tests', tbl => {
    tbl.increments('id');
    tbl.integer('user_id').notNullable();
    tbl.foreign('user_id').references('users.id');
    tbl.integer('score');
    tbl.string('subject', 128);
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
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

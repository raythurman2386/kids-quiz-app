exports.up = async function (knex) {
  await knex.schema.table('users', tbl => {
    tbl.string('parent_email', 128);
    tbl.foreign('parent_email').references('users.email');
  });
};

exports.down = async function (knex) {
  await knex.schema.table('users', tbl => {
    tbl.dropColumn('parent_email');
  });
};

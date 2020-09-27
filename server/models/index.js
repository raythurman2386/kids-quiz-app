const db = require('../data/db-config');

class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }
  find() {
    return db(this.tableName);
  }
  findBy(filter) {
    return db(this.tableName).where(filter).first();
  }
  findChildren(filter) {
    return db(this.tablename).where({ parent_email: filter });
  }
  findAll(filter) {
    return db(this.tableName).where(filter);
  }
  add(newItem) {
    return db(this.tableName).insert(newItem).returning('*');
  }
  update(id, item) {
    return db(this.tableName).where({ id }).update(item).returning('*');
  }
  remove(id) {
    return db(this.tableName).where({ id }).del();
  }
}

const User = new Model('users');

module.exports = { User };

require('dotenv').config();
const pg = require('pg');

const localPg = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

if (!process.env.DATABASE_URL) {
  pg.defaults.ssl = false;
} else {
  pg.defaults.ssl = true;
}

const sqlite = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys=ON', done);
    },
  },
};

module.exports = {
  development: {
    ...sqlite,
    connection: {
      filename: './data/kidspace.db3',
    },
  },

  test: {
    ...sqlite,
    connection: {
      filename: './data/test.db3',
    },
  },

  production: {
    client: 'pg',
    connection: localPg,
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};

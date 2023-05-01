import knex, { Knex } from 'knex';
import path from 'path';

const db: Knex = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true,
});

export default db;
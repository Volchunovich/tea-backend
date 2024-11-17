import * as dotenv from 'dotenv';

dotenv.config();

export default {
  client: process.env.DB_SQL_CLIENT,
  connection: {
    host: process.env.DB_SQL_HOST,
    port: +process.env.DB_SQL_PORT || 5432,
    user: process.env.DB_SQL_USERNAME,
    password: process.env.DB_SQL_PASSWORD,
    database: process.env.DB_SQL_DATABASE,
  },
  pool: {
    min: +process.env.DB_SQL_POOL_MIN || 0,
    max: +process.env.DB_SQL_POOL_MAX || 10,
  },
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './migrations/seeds',
  },
};

require('dotenv').config();

const config = {
  development: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: true,
    pool: {
      max: 10,
      min: 0,
      idle: 5000,
      acquire: 5000,
      evict: 5000,
    },
  },
};

module.exports = config;

require('dotenv').config();

const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host : 'db',
    port : 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    charset: 'utf8',
    protocol: 'tcp'
  }
});

module.exports = knex;
const mysql = require("mysql2");
const Promise = require("bluebird");
const Sequelize = require('sequelize');

const orm = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  define: { timestamps: false }
})

const Response = orm.define('response', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  sessionId: { type: Sequelize.STRING, unique: true },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  address1: Sequelize.STRING,
  address2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zipCode: Sequelize.INTEGER,
  phoneNum: Sequelize.BIGINT,
  CCNum: Sequelize.BIGINT,
  expiration: Sequelize.STRING,
  CVV: Sequelize.INTEGER,
  billingZip: Sequelize.STRING
})
// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() => Response.sync())
  .catch((err) => console.log(err));

module.exports.db = db;
module.exports.Response = Response;

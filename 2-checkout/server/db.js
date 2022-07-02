const mysql = require("mysql2");
const Promise = require("bluebird");
const Sequelize = require('sequelize');

const orm = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  define: {timestamps: false}
})

const Response = orm.define('response', {
  id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  sessionId: {type: Sequelize.STRING, unique: true},
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  address1: Sequelize.STRING,
  address2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zipCode: Sequelize.STRING,
  CCNum: Sequelize.INTEGER,
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
  /*.then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses
      (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
       sessionId VARCHAR(40) UNIQUE NOT NULL,
       name VARCHAR(30) NOT NULL,
       email VARCHAR(30) NOT NULL,
       password VARCHAR(30) NOT NULL,
       address1 VARCHAR(30) NOT NULL,
       address2 VARCHAR(30),
       city VARCHAR(20) NOT NULL,
       state VARCHAR(20) NOT NULL,
       zipCode VARCHAR(20) NOT NULL,
       CCNum INT(30) NOT NULL,
       expiration DATE NOT NULL,
       CVV INT(3) NOT NULL,
       billingZip VARCHAR(20) NOT NULL)`
    )
  )*/
  .catch((err) => console.log(err));

module.exports.db = db;
module.exports.Response = Response;

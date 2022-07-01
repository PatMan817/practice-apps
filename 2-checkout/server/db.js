const mysql = require("mysql2");
const Promise = require("bluebird");

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
  .then(() =>
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
  )
  .catch((err) => console.log(err));

module.exports = db;

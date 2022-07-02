require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db").db;

const app = express();
app.use(express.json())

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */
 const Response = require("./db").Response;

app.post('/checkout', ((req, res) => {
  console.log('Request', req.body)
  Response.create(req.body)
    .then(() => res.send('Purchase Successsful'))
    .catch((err) => console.error(err))
}))

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

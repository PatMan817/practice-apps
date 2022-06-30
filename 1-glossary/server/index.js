require("dotenv").config();
const express = require("express");
const path = require("path");
const save = require("./db.js").save;
const getWords = require("./db.js").save;


const app = express();

// Serves up all static and generated assets in ../client/dist.
//app.user(cores())
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json())

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.post('/words', (req, res) => {
  let newWordObj = req.body;
  save(newWordObj)
  res.end('Word Saved')
})

app.get('/words', (req, res) => {})

app.delete('/words', (req, res) => {})

app.patch('/words', (req, res) => {})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

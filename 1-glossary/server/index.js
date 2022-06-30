require("dotenv").config();
const express = require("express");
const path = require("path");
const save = require("./db.js").save;
const getWords = require("./db.js").getWords;
const remove = require("./db.js").remove;


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
  console.log('Running Post')
  let newWordObj = req.body;
  return save(newWordObj)
    .then(() => {
      res.status(201);
      res.send('Word Saved')
    })
    .catch((err) => err)
})

app.get('/words', (req, res) => {
  console.log('Running Get')
  getWords((err, data) => {
    if (err) {
      res.status(404)
      res.send('Words not Found')
    } else {
      res.status(200);
      console.log('Sending Words')
      res.send(data)
    }
  })
})

app.delete('/words', (req, res) => {
  console.log('Running Delete');
  let deletedWord = req.body.word;
  console.log(deletedWord)
  return remove(deletedWord)
    .then(() => {
      res.status(200);
      res.send('Word Deleted')
    })
    .catch((err) => console.error(err))
})

app.patch('/words', (req, res) => {})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

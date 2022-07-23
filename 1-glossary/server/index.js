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
app.use(express.json());

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.post("/words", async (req, res) => {
  console.log("Running Post");
  let newWordObj = req.body;
  if (newWordObj.definition === null) {
    return;
  }
  try {
    await save(newWordObj);
    res.status(201);
    res.send("Word Saved");
  } catch (err) {
    return err;
  }
});

app.get("/words", async (req, res) => {
  console.log("Running Get");
  try {
    const wordData = await getWords();
    res.status(200);
    res.send(wordData);
  } catch (err) {
    return console.error(err);
  }
});

app.delete("/words", async (req, res) => {
  console.log("Running Delete");
  let deletedWord = req.body.word;
  console.log("deletedWord in server: ", deletedWord);
  try {
    await remove(deletedWord);
    res.status(200);
    res.send("Word Deleted");
  } catch (err) {
    return console.error(err);
  }
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

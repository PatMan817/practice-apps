const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect("mongodb://localhost/glossary");
// 2. Set up any schema and models needed by the app
let glossarySchema = mongoose.Schema({
  // TODO: your schema here!
  word: {
    type: String,
    unique: true,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
});

let Entry = mongoose.model("Entry", glossarySchema);

function remove(deletedWord) {
  console.log("calling delete in DB");
  return Entry.deleteOne({ word: deletedWord });
}

function save(wordObj) {
  return Entry.find({ word: wordObj.word })
    .then((array) => {
      if (array.length > 0) {
        return Entry.findOneAndDelete({ word: wordObj.word }).catch((err) =>
          console.error(err)
        );
      }
    })
    .then(() => Entry.create(wordObj))
    .then(() => "Word Saved")
    .catch((err) => console.error(err));
}

function getWords(callback) {
  //let wordArray = [];
  console.log("calling getWords in DB");
  Entry.find().sort({ word: 1 }).exec(callback);
}
// 3. Export the models
module.exports.save = save;
module.exports.getWords = getWords;
module.exports.remove = remove;

// 4. Import the models into any modules that need them

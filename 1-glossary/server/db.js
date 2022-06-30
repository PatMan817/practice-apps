const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary');
// 2. Set up any schema and models needed by the app
let glossarySchema = mongoose.Schema({
  // TODO: your schema here!
  word: {
    type: String,
    unique: true
  },
  definition: String
});

let Entry = mongoose.model('Entry', glossarySchema);

function save(wordObj) {
  Entry.find({word: wordObj.word})
    .then((array) => {if (array.length > 0) {
      return Entry.findOneAndDelete({word: wordObj.word})
        .catch((err) => console.error(err))
    }})
    .then(() => Entry.create(wordObj))
    .catch((err) => console.error(err))
}

function getWords(callback) {
  //let wordArray = [];
  Entry.find()
    .exec(callback)
}
// 3. Export the models
module.exports.save = save;
module.exports.getWords = getWords;

// 4. Import the models into any modules that need them

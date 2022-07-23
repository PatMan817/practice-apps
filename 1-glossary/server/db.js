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

async function remove(deletedWord) {
  console.log("calling delete in DB");
  try {
    return await Entry.deleteOne({ word: deletedWord });
  } catch (err) {
    return console.error(err);
  }
}

async function save(wordObj) {
  try {
    const array = await Entry.find({ word: wordObj.word });
    if (array.length > 0) {
      await Entry.findOneAndDelete({ word: wordObj.word });
    }
    await Entry.create(wordObj);
    return "Word Saved";
  } catch (err) {
    return console.error(err);
  }
}

async function getWords() {
  console.log("calling getWords in DB");
  try {
    return await Entry.find().sort({ word: 1 });
  } catch (err) {
    return console.error(err);
  }
}
// 3. Export the models
module.exports.save = save;
module.exports.getWords = getWords;
module.exports.remove = remove;

// 4. Import the models into any modules that need them

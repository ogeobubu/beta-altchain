const mongoose = require("mongoose");
const phraseSchema = mongoose.Schema({
  phrase: {
    type: String,
  },
});

const Phrase = mongoose.model("phrase", phraseSchema);

module.exports = Phrase;

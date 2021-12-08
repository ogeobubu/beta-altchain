const mongoose = require("mongoose");
const phraseSchema = mongoose.Schema({
  phrase: {
    type: Array,
  },
});

const Phrase = mongoose.model("phrase", phraseSchema);

module.exports = Phrase;

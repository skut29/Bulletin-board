const express = require("express");
const router = express.Router();
bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();
const Note = require("./models/Note");

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.MONGODB_URI;

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));;

router.get("/", async (req, res) => {
  const note = new Note({note: "ffxv"});

  try {
    await note.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err)
  }
});

router.post("/notes", (req, res) => {
  const newNote = new Note(req.body);
  newNote
  .save()
  .then((newNote) => {
    res.json(newNote);
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Note.findById(id, (err, note) => {
    res.json(note)
  });
});

// app.put()

// app.delete()



app.listen(2000, () => {
  console.log('Your app is listening on port 2000')
})

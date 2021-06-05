const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer();
const Note = require('../models/Note');

const app = express();

const noteController = require('../controllers/note');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

router.get('/notes', noteController.getAllNotes);
router.post('/notes', upload.none(), noteController.newNote);
router.put('/notes/:note', noteController.editNote);
router.delete('/notes/:note', noteController.deleteNote);




module.exports = router;
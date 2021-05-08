const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer();

const noteController = require('../controllers/note');

router.get('/notes', noteController.getAllNotes);
router.post('/notes', upload.none(), noteController.newNote);
router.put('/notes/:note', noteController.editNote);
router.delete('/notes/:note', noteController.deleteNote);




module.exports = router;
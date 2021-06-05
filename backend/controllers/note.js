const mongoose = require('mongoose');
const Note = require('../models/Note');


const getAllNotes = (req, res, next) => {
    res.json({note: "GET new note"});
};

const newNote = (req, res, next) => {
    const newNote = new Note("kmk")
    newNote.save((err, data)=>{
        if(err) return res.json({Error: err});
        return res.json(data);
    })
};

const editNote = (req, res, next) => {
    res.json({note: "PUT new note"});
};

const deleteNote = (req, res, next) => {
    res.json({note: "DELETE new note"});
};
 
module.exports = {
    getAllNotes,
    newNote,
    editNote,
    deleteNote
};
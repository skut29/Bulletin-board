import React, { useState } from 'react'
import Notes from "./components/Notes"
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  const [notes, setNotes] = useState([
    {id: uuidv4(), text: "hodjj"},
    {id: uuidv4(), text: "hjvhvhj"}
  ]);
  const [noteText, setNoteText] = useState('')
  const [mode, setMode] = useState("edit-off");

    const addNote = () => {
      const newNote = {
        id: uuidv4(),
        text: ''
      }
      const newNotes = [...notes, newNote]
      setNotes(newNotes)
  }

  const editNote = (id) => {
    const editedNotes = notes.map(note => {
      if (note.id === id) {
        note.text = "jjjjj"
      }
      return note
    })
    setNotes(editedNotes)
    console.log(editedNotes)
  } 

  const deleteNote = (id) => {
    let updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes)
  }

    
  return (
    <div className="App">
      <header>
        <h1>Bulletin Board</h1>
        <h2 className="new-note" onClick={addNote}>newNote++</h2>
      </header>
      <main>
        <Notes notes={notes} mode={mode} editNote={editNote} deleteNote={deleteNote}/>
      </main>
    </div>
  )
}

export default App

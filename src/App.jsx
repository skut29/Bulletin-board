import React, { useState } from 'react'
import Notes from "./components/Notes"
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  const [notes, setNotes] = useState([])

    const addNote = () => {
      const newNote = {
        id: uuidv4(),
        text: ''
      }
      const newNotes = [...notes, newNote]
      setNotes(newNotes)
}
    console.log(notes)
  return (
    <div className="App">
      <header>
        <h1>Bulletin Board</h1>
        <h2 className="new-note" onClick={addNote}>newNote++</h2>
      </header>
      <main>
        <Notes notes={notes}/>
      </main>
    </div>
  )
}

export default App

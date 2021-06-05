import React, { useState } from 'react'
import Draggable from 'react-draggable';
// import notesData from '../data';

function Notes({ notes, mode, editNote, deleteNote }) {
    // const [mode, setMode] = useState("edit-off");

    return (
        <>
       {notes.map(note => (
           <Draggable>
                <div className="note" key={note.id}>
                    <header>
                        <button className="btn-red" onClick={deleteNote}></button>
                        <button className="btn-yellow" onClick={editNote}></button>
                        <button className="btn-green"></button>
                    </header>
                    {mode === "edit-off" ? <div>{note.text}</div> : <textarea>{note.text}</textarea>}
                </div>
        </Draggable>
        ))}
        </>
    )
}

export default Notes

import React from 'react'
import Draggable from 'react-draggable';
// import notesData from '../data';

function Notes({ notes }) {
    
    return (
        <>
       {notes.map(note => (
           <Draggable>
                <div className="note" key={note.id}>
                    <header>
                        <button className="btn-red"></button>
                        <button className="btn-yellow"></button>
                        <button className="btn-green"></button>
                    </header>
                    <textarea>{note.text}</textarea>
                </div>
        </Draggable>
        ))}
        </>
    )
}

export default Notes

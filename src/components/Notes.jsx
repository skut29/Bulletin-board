import React from 'react'
import Draggable from 'react-draggable';

function Notes() {
    return (
        <Draggable>
            <div className="note">
                <header>
                    <button className="btn-move"></button>
                    <button className="btn-edit"></button>
                    <button className="btn-delete"></button>
                </header>
                <main>Notes will be shown here.</main>
                <main>Notes will be shown here.</main>
            </div>
        </Draggable>
    )
}

export default Notes

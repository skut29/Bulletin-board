import React, { useState } from 'react'
import Notes from "./components/Notes"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Bulletin Board</h1>
        <p>login</p>{/* chhanges to text input when logged in */}
      </header>
      <main>
        <Notes />
        <Notes />
        <Notes />
        <Notes />
      </main>
    </div>
  )
}

export default App

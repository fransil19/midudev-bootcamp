import React, {useState} from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  /* const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  } */

  const handleChange = (event) => {
    setNewNote(event.target.value) 
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Crear nota')
    const noteToAddToState = {
      id: notes.length +1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random < 0.5
    }

    console.log(noteToAddToState)

    setNotes([...notes,noteToAddToState])
    setNewNote('')
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? 'Show only important' : 'Show all'}
      </button>
      <ul>
        {notes
        .filter(note => {
          if(showAll) return true
          return note.important === true
        })
        .map(note => (
          <Note key={note.id} {...note} />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button type="submit">Crear nota</button>
      </form>
    </div>
  )
}

export default App
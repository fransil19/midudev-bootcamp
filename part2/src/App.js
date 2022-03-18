import React, {useEffect, useState} from 'react'
import Note from './components/Note'
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        const {data} = response
        setNotes(data)
        setLoading(false)
      })
  }, [])

  const handleChange = (event) => {
    setNewNote(event.target.value) 
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Crear nota')
    const noteToAddToState = {
      id: notes.length +1,
      title: newNote,
      body: newNote
    }

    console.log(noteToAddToState)

    setNotes([...notes,noteToAddToState])
    setNewNote('')
  }

  return (
    <div>
      <h1>Notes</h1>
      {
        loading ? "Cargando..." : ""
      }
      <ol>
        {notes.map(note => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button type="submit">Crear nota</button>
      </form>
    </div>
  )
}

export default App
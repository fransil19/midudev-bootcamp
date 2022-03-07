import React, { useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const handleOnChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleOnChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }
    if(persons.filter(person => person.name === newName).length>0){
      return alert(`${newName} is already added to phonebook`)
    }
    setPersons([...persons, person])
    setNewName('')
    setNewNumber('')
  }

  const handleOnChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChangeFilter={handleOnChangeFilter} filter={filter}/>
      <h3>Add a new</h3>
      <PersonForm onSubmit={handleOnSubmit} onChangeName={handleOnChangeName} onChangeNumber={handleOnChangeNumber} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons personList={persons} filter={filter}/>
    </div>
  )
}

export default App
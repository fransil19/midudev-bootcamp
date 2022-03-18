import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios.get("http://localhost:3001/persons")
      .then(response => {
        const {data} = response
        setPersons(data)
      })
  },[])

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
import React from 'react'
import {Person} from './Person'

export const Persons = ({personList,filter}) => {
    return (
      personList
        .filter(person => filter === '' || person.name.toUpperCase().includes(filter.toUpperCase()))
        .map(person => {
          return <Person key={person.name} person={person}/>
        })
    )
  }
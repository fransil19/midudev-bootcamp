import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Content } from './components/Content'



function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => {
        const {data} = response
        setCountries(data)
      })
  }, [])

  const handleOnChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  let filteredCountries = [] 
  if (filter === ''){
    filteredCountries = countries
  }
  else{
    filteredCountries = countries.filter(countrie => {
      return countrie.name.common.toUpperCase().includes(filter.toUpperCase())
    })
  }

  const handleClick = (event) => {
    setFilter(event.target.id);
  };
  
  return (
    <div>
      <div>
        Find countries <input type="text" onChange={handleOnChangeFilter} value={filter}/>
      </div>
      <Content Countries={filteredCountries} handleClick={(event) => handleClick(event)}/>
    </div>
  );
}

export default App;

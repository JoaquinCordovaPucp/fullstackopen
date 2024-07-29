import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Persons.jsx'
import axios from "axios"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] =useState('')
  const [searchName, setSearchName] = useState('')

  useEffect(()=> {
    console.log("effect")
    axios
      .get("http://localhost:3001/persons")
      .then((e)=> {
        setPersons(e.data)
      })
  }, [])

  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(searchName.toLowerCase())
  )

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangePhone = (event) => {
    setNewPhone(event.target.value)
  }

  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }

  const submitName = (event) => {
    event.preventDefault()
    if(persons.find(person => person.name === newName)){
      window.alert(`${newName} is already added to phonebook`)
    } else  {
    console.log(newName)
    setPersons(persons.concat(
      { name: newName,
        number: newPhone
      }
    ))
  } 
  } 
  


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleSearchName} value={searchName} />
      <h3>add a new</h3>
      <PersonForm onSubmit={submitName} inputName={handleChangeName} inputPhone={handleChangePhone} valueName={newName} valuePhone={newPhone} />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App

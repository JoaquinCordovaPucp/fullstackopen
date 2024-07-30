import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Persons.jsx'
import axios from "axios"
import personServices from "./services/persons.js"
import SuccesfulMessage from './components/SuccesfulMessage.jsx'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] =useState('')
  const [searchName, setSearchName] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState("succesfull")

  useEffect(()=> {
    console.log("effect")
    personServices
    .getAll()
    .then(person => {
      setPersons(person)
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
    const newPerson = {
      name: newName,
      number: newPhone
    }
    if(persons.find(person => person.name === newName)){
      const person = persons.find(person => person.name === newName)
      if(window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)){
        personServices
        .update(person.id, newPerson)
        .then(person => {
          setPersons(persons.map(persona => 
            persona.id === person.id ? person : persona
          ))
          setMessageType("succesfull")
          setMessage(`${person.name} was succesfully added`)
          setTimeout(()=> setMessage(null), 5000)
        })
        .catch(error => {
          setMessageType("error")
          setMessage(`Information of ${person.name} has already been removed from the server`)
          setTimeout(() => setMessage(null), 5000)
        })
      }
    } else  {
    personServices
    .create(newPerson)
    .then(person => {
      setPersons(persons.concat(person))
      setMessageType("succesfull")
      setMessage(`${person.name} was succesfully added`)
      setTimeout(()=> setMessage(null), 5000)
    })
  } 
  } 

  const eliminatePerson = (id) => {
    personServices
      .eliminate(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  


  return (
    <div>
      <h2>Phonebook</h2>
      <SuccesfulMessage message={message} type={messageType}/>
      <Filter onChange={handleSearchName} value={searchName} />
      <h3>add a new</h3>
      <PersonForm onSubmit={submitName} inputName={handleChangeName} inputPhone={handleChangePhone} valueName={newName} valuePhone={newPhone} />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} eliminate={eliminatePerson}/>
    </div>
  )
}

export default App

import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Persons.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] =useState('')
  const [searchName, setSearchName] = useState('')

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
        phone: newPhone
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

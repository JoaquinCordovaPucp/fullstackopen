import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
      phone: '978-798-987'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] =useState('')

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangePhone = (event) => {
    setNewPhone(event.target.value)
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
      <form onSubmit={submitName}>
        <div>
          name: <input onChange={handleChangeName} value={newName} />
        </div>
        <div>
          number: <input onChange={handleChangePhone} value={newPhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(persons => 
      <div key={persons.name}>
        <p key={persons.name}>{persons.name}</p>
        <p key={persons.phone}>{persons.phone}</p>
      </div>
      )}
    </div>
  )
}

export default App

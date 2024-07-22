import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleChangeInput = (event) => {
    setNewName(event.target.value)
  }

  const submitName = (event) => {
    event.preventDefault()
    if(persons.find(person => person.name === newName)){
      window.alert(`${newName} is already added to phonebook`)
    } else  {
    console.log(newName)
    setPersons(persons.concat(
      { name: newName}
    ))
  } 
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitName}>
        <div>
          name: <input onChange={handleChangeInput} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(persons => 
        <p key={persons.name}>{persons.name}</p>
      )}
    </div>
  )
}

export default App

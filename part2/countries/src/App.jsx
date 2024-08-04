import { useState } from 'react'
import axios from 'axios'
import TooMany from './components/TooMany'
import MatchedCountries from './components/MatchedCountries'
import Country from './components/Country'

function App() {

  const [newCountry, setNewCountry] = useState('')
  const [length, setLength] = useState(0)
  const [matchCountries, setMatchCountries] = useState ([])              //Me quede aqui, termine el caso en el que hay mas de 10 coincidencias, ahora me falta el de cuando hay menos de 10 y cuando hay una
  const [countryInfo, setcountryInfo] = useState([])

  const handleChange = (event)  => {
    setNewCountry(event.target.value)
  }

  const searchCountry = (event) => {
    event.preventDefault()  
    axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
    .then((e) => {
      const resultados = e.data.filter(objetoPais => objetoPais.name.common.toLowerCase().includes(newCountry.toLocaleLowerCase()))
      const paisesCoinciden = resultados.map(objeto =>objeto.name.common)
      setLength(paisesCoinciden.length)
      if (paisesCoinciden.length <= 10 && paisesCoinciden.length > 0 && paisesCoinciden.length !== 1){
        setMatchCountries(paisesCoinciden)
      }
      else if (paisesCoinciden.length === 1) {
        setcountryInfo(resultados[0])
      }
      
    })
  }

  return (
    <>
    <form onSubmit={searchCountry}>
      <label>find a country: </label>
      <input type='text' onChange={handleChange} value={newCountry}></input>
    </form>
    <TooMany length={length} />
    <MatchedCountries length={length} countries={matchCountries}/>
    <Country length={length} countryInfo={countryInfo} /> 
    </> 
  )
}

export default App

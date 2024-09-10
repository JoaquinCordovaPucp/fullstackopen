import axios from "axios"
import { useState } from "react"

const MatchedCountries = ({length, countries, countryInfo}) => {

    const [index, setIndex] = useState(-1)

    if( index === -1) {
        if (length > 10 || length === 1 ||   length === 0) {
            return null
        } else {

            const elements =  countries.map(country => {
            return (
                    <li key={country}>
                        {country}
                        <button key={`${country}-button`} onClick={() => setIndex(countries.indexOf(country))}>show</button>
                    </li>
                    )
        })
        return (
            <>
            <ul>
                {elements}
            </ul>
            </>
        )
        }
    } else {
        const pais = countryInfo[index]
        
        const languages = Object.entries(pais.languages)
        const languages2 = languages.map(([perro, gato]) => gato)
        console.log(pais)
        const languages3 = languages2.map(l => <li key={l}>{l}</li>)
        const flagURL = pais.flags.png
        console.log(flagURL)
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${pais.capital[0]}&appid=178d5001f43d404b2b8fae03d977b820`)
        .then((e) => {
            console.log(e.data.main.temp)
            const temp = e.data.main.temp /* no me renderiza aun los datos cuando le doy click a show */
            return(
                <>
                <h1>{pais.name.common}</h1>
                <p>Capital: {pais.capital[0]} </p>
                <p>Area: {pais.area}</p>
                <h3>Languages:</h3>
                <ul>
                {languages3}
                </ul>
                <img src={flagURL}></img> 
                <h2>Weather in {pais.capital[0]}</h2>
                <p>Temperature: </p>
                </>
            )  
        })

    }   
}

export default MatchedCountries
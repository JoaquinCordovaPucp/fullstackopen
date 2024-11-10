import { useEffect, useState } from "react"
import axios from "axios"
const Country = ({length, countryInfo}) => {
    const [temp, setTemp] =useState(null)

    useEffect(()=> {
        if (length === 1) {
            axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${countryInfo.capital[0]}&appid=178d5001f43d404b2b8fae03d977b820`)
            .then((e) => {
                console.log(e.data.main.temp)
                setTemp(e.data.main.temp)
            }, [length, countryInfo])
        }
    })
    if (length === 1) {
        const languages = Object.entries(countryInfo.languages)
        const languages2 = languages.map(([perro, gato]) => gato)
        const languages3 = languages2.map(l => <li key={l}>{l}</li>)
        const flagURL = countryInfo.flags.png
        return(
            <>
            <h1>{countryInfo.name.common}</h1>
            <p>Capital: {countryInfo.capital[0]} </p>
            <p>Area: {countryInfo.area}</p>
            <h3>Languages:</h3>
            <ul>
             {languages3}
            </ul>
            <img src={flagURL}></img> 
            <p>Temperature in {countryInfo.capital[0]}: {temp} C </p>
            </>
        )
    } else {
        return null
    }
}

export default Country
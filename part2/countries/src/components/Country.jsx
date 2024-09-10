const Country = ({length, countryInfo}) => {
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
            </>
        )
    } else {
        return null
    }
}

export default Country
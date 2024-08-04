const MatchedCountries = ({length, countries}) => {
    if (length > 10 || length === 1 ||   length === 0) {
        return null
    } else {
        const elements =  countries.map(country => {
        return (
                <li key={country}>{country}</li>
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
}

export default MatchedCountries
const Persons = ({personsToShow}) => {
    return(
        <>
        {personsToShow.map(persons => 
            <div key={persons.name}>
              <p key={persons.name}>{persons.name}</p>
              <p key={persons.phone}>{persons.phone}</p>
            </div>
            )}
        </>
    )
    
}

export default Persons
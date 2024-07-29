const Persons = ({personsToShow}) => {
    return(
        <>
        {personsToShow.map(persons => 
            <div key={persons.name}>
              <p key={persons.name}>{persons.name}</p>
              <p key={persons.number}>{persons.number}</p>
            </div>
            )}
        </>
    )
    
}

export default Persons
const Persons = ({personsToShow, eliminate}) => {
    return(
        <>
        {personsToShow.map(persons => 
            <div key={persons.name}>
              <p key={persons.name}>{persons.name}</p>
              <p key={persons.number}>{persons.number}</p>
              <button onClick={()=>{
                if (window.confirm(`Delete ${persons.name}`)){
                    eliminate(persons.id)}
                }
                }>delete</button>
            </div>
            )}
        </>
    )
    
}

export default Persons
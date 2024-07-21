const Part = ({content}) => {
    return(
        <div>
        {content.map(cont => 
        <p key={cont.id}>{cont.name} {cont.exercises}</p>
        )}
        </div>
    )
}

export default Part
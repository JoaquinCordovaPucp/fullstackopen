const Sum = ({content}) => {
    const exercises = content.map(cont => cont.exercises)
    const total = exercises.reduce((sum,value) => sum + value, 0)
    return (
        <p>total of exercises: {total}</p>
    )
}

export default Sum
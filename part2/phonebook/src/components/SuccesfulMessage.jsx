import "../styles.css"

const SuccesfulMessage = ({message}) => {
    if(message === null){
        return null
    }

    return <div className="succesfulMessage">{message}</div>
}

export default SuccesfulMessage
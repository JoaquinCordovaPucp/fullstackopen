import "../styles.css"

const SuccesfulMessage = ({message, type}) => {
    if(message === null){
        return null
    }
    const messageClass = type === "error" ? "unsuccesfulMessage" : "succesfulMessage"
    return <div className={messageClass}>{message}</div>
}

export default SuccesfulMessage
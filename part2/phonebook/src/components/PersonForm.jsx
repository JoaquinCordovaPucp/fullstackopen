const PersonForm = ({onSubmit, inputName, inputPhone, valueName, valuePhone}) => {
    return(
    <form onSubmit={onSubmit}>
        <div>
          name: <input onChange={inputName} value={valueName} />
        </div>
        <div>
          number: <input onChange={inputPhone} value={valuePhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}
export default PersonForm
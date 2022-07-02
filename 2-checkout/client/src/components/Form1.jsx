const Form1 = (props) => {
  return (
    <>
      <form next="Form2" onSubmit={props.buttonHandler}>
        <label>
          Name:
          <input type="text" required id="name" value={props.appState.name} onChange={props.handleChange} />
        </label><br /><br />
        <label>
          E-Mail:
          <input type="email" required id="email" value={props.appState.email} onChange={props.handleChange} />
        </label><br /><br />
        <label>
          Password:
          <input type="password" required minLength="8" maxLength="16" id="password" value={props.appState.password} onChange={props.handleChange} />
        </label><br /><br />
        <button next='HomePage' onClick={props.buttonHandler}>Back</button>
        <input type="submit" next="Form2" value="Next"></input>
      </form>
    </>
  )
}

export default Form1
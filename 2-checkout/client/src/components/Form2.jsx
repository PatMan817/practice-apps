const Form2 = (props) => {
  return (
    <>
      <form next="Form3" onSubmit={props.buttonHandler}>
        <label>
          Address:
          <input type="text" required id="address1" value={props.appState.address1} onChange={props.handleChange} />
        </label><br />
        <input type="text" id="address2" value={props.appState.address2} onChange={props.handleChange} /><br /><br />
        <label>
          City:
          <input type="text" required id="city" value={props.appState.city} onChange={props.handleChange} />
        </label><br /><br />
        <label>
          State:
          <input type="text" required id="state" value={props.appState.state} onChange={props.handleChange} />
        </label><br /><br />
        <label>
          Zip Code:
          <input type="number" required id="zipCode" value={props.appState.zipCode} onChange={props.handleChange} />
        </label><br /><br />
        <label>
         Phone Number:
          <input type="tel" required id="phoneNum" value={props.appState.phoneNum} onChange={props.handleChange} />
        </label><br /><br />
        <input type="submit" next="Form3" value="Next"></input>
      </form>
    </>
  )
}

export default Form2
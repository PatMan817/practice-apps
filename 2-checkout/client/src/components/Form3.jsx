const Form3 = (props) => {
  return (
    <>
      <form next="Confirmation" onSubmit={props.buttonHandler}>
        <label>
          Credit Card Number:
          <input type="number" required id="CCNum" value={props.appState.CCNum} onChange={props.handleChange} />
        </label><br /><br />
        <label>
          Expiration:
          <input type="month" required id="expiration" value={props.appState.expiration} onChange={props.handleChange} />
        </label><br /><br />
        <label>
          CVV:
          <input type="password" required id="CVV" value={props.appState.CVV} onChange={props.handleChange} />
        </label><br /><br />
        <label>
          Billing Zip Code:
          <input type="number" required id="billingZip" value={props.appState.billingZip} onChange={props.handleChange} />
        </label><br /><br />
        <label></label>
        <input type="submit" next="Confirmation" value="Next"></input>
      </form>
    </>
  )
}

export default Form3
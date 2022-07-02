const Form3 = (props) => {
  let date = new Date;
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = month.toString();
    month = '0' + month;
  } else {
    month = month.toString()
  }
  date = date.getFullYear().toString() + '-' + month
  return (
    <>
      <form next="Confirmation" onSubmit={props.buttonHandler}>
        <label>
          Credit Card Number:
          <input type="number" minLength="14" maxLength="19" required id="CCNum" value={props.appState.CCNum} onChange={props.handleChange} />
        </label><br /><br />
        <label>
          Expiration:
          <input type="month" required min={date} id="expiration" value={props.appState.expiration} onChange={props.handleChange} />
        </label><br /><br />
        <label>
          CVV:
          <input type="password" required minLength="3" maxLength="3" inputMode="numeric" required id="CVV" value={props.appState.CVV} onChange={props.handleChange} />
        </label><br /><br />
        <label>
          Billing Zip Code:
          <input type="number" required minLength="5" maxLength="5" id="billingZip" value={props.appState.billingZip} onChange={props.handleChange} />
        </label><br /><br />
        <button next='Form2' onClick={props.buttonHandler}>Back</button>
        <input type="submit" next="Confirmation" value="Next"></input>
      </form>
    </>
  )
}

export default Form3
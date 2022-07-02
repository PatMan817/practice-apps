const Confirmation = (props) => (
  <>
    <span>Please confirm your information.</span><br/>
    <p>Name: {props.appState.name}</p>
    <p>E-Mail: {props.appState.email}</p>
    <p>Password: {props.appState.password}</p>
    <p>Address1: {props.appState.address1}</p>
    <p>Address2: {props.appState.address2}</p>
    <p>City: {props.appState.city}</p>
    <p>State: {props.appState.state}</p>
    <p>Zip Code: {props.appState.zipCode}</p>
    <p>Phone Number: {props.appState.phoneNum}</p>
    <p>Credit Card: {props.appState.CCNum}</p>
    <p>Expiration: {props.appState.expiration}</p>
    <p>CVV: {props.appState.CVV}</p>
    <p>Billing Zip: {props.appState.billingZip}</p>
    <form onSubmit={props.purchaseButtonHandler}>
      <button next='Form3' onClick={props.buttonHandler}>Back</button>
      <input type="submit" value="Purchase"></input>
    </form>
  </>
)

export default Confirmation;
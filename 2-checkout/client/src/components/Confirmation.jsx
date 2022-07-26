function Confirmation({ buttonHandler, purchaseButtonHandler, appState }) {
  return (
    <>
      <span>Please confirm your information.</span>
      <br />
      <p>Name: {appState.name}</p>
      <p>E-Mail: {appState.email}</p>
      <p>Password: {appState.password}</p>
      <p>Address1: {appState.address1}</p>
      <p>Address2: {appState.address2}</p>
      <p>City: {appState.city}</p>
      <p>State: {appState.state}</p>
      <p>Zip Code: {appState.zipCode}</p>
      <p>Phone Number: {appState.phoneNum}</p>
      <p>Credit Card: {appState.CCNum}</p>
      <p>Expiration: {appState.expiration}</p>
      <p>CVV: {appState.CVV}</p>
      <p>Billing Zip: {appState.billingZip}</p>
      <form onSubmit={purchaseButtonHandler}>
        <button next="Form3" onClick={buttonHandler}>
          Back
        </button>
        <input type="submit" value="Purchase"></input>
      </form>
    </>
  );
}

export default Confirmation;

function Form3({ buttonHandler, handleChange, appState }) {
  let date = new Date();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = month.toString();
    month = "0" + month;
  } else {
    month = month.toString();
  }
  date = date.getFullYear().toString() + "-" + month;
  return (
    <>
      <form next="Confirmation" onSubmit={buttonHandler}>
        <label>
          Credit Card Number:
          <input
            type="number"
            min="10000000000000"
            max="9999999999999999999"
            required
            id="CCNum"
            value={appState.CCNum}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Expiration:
          <input
            type="month"
            required
            min={date}
            id="expiration"
            value={appState.expiration}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          CVV:
          <input
            type="password"
            required
            minLength="3"
            maxLength="3"
            inputMode="numeric"
            id="CVV"
            value={appState.CVV}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Billing Zip Code:
          <input
            type="number"
            required
            min="10000"
            max="99999"
            id="billingZip"
            value={appState.billingZip}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button next="Form2" onClick={buttonHandler}>
          Back
        </button>
        <input type="submit" next="Confirmation" value="Next"></input>
      </form>
    </>
  );
}

export default Form3;

function Form2({ buttonHandler, handleChange, appState }) {
  return (
    <>
      <form next="Form3" onSubmit={buttonHandler}>
        <label>
          Address:
          <input
            type="text"
            required
            id="address1"
            value={appState.address1}
            onChange={handleChange}
          />
        </label>
        <br />
        <input
          type="text"
          id="address2"
          value={appState.address2}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>
          City:
          <input
            type="text"
            required
            id="city"
            value={appState.city}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          State:
          <input
            type="text"
            required
            id="state"
            value={appState.state}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Zip Code:
          <input
            type="number"
            required
            min="10000"
            max="99999"
            id="zipCode"
            value={appState.zipCode}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            required
            minLength="9"
            maxLength="14"
            id="phoneNum"
            value={appState.phoneNum}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button next="Form1" onClick={buttonHandler}>
          Back
        </button>
        <input type="submit" next="Form3" value="Next"></input>
      </form>
    </>
  );
}

export default Form2;

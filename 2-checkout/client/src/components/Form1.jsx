function Form1({ buttonHandler, handleChange, appState }) {
  return (
    <>
      <form next="Form2" onSubmit={buttonHandler}>
        <label>
          Name:
          <input
            type="text"
            required
            id="name"
            value={appState.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          E-Mail:
          <input
            type="email"
            required
            id="email"
            value={appState.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type="password"
            required
            minLength="8"
            maxLength="16"
            id="password"
            value={appState.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button next="HomePage" onClick={buttonHandler}>
          Back
        </button>
        <input type="submit" next="Form2" value="Next"></input>
      </form>
    </>
  );
}

export default Form1;

import React from "react";

class Form2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enteredAddress1: '',
      enteredAddress2: '',
      enteredCity: '',
      enteredState: '',
      enteredZip: ''
    }
  }

  render() {
    return (
    <>
      <span>Form2 is rendering!</span>
      <button next="Form3" onClick={this.props.buttonHandler}>Next</button>
    </>
    )
  }
}

export default Form2
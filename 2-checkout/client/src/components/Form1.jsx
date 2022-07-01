import React from "react";

class Form1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enteredName: '',
      enteredEmail: '',
      enteredPassword: ''
    }
  }

  render() {
    return (
    <>
      <span>Form1 is rendering!</span>
      <button next="Form2" onClick={this.props.buttonHandler}>Next</button>
    </>
    )
  }
}

export default Form1
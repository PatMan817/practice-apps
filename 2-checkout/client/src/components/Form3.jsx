import React from "react";

class Form3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enteredCCNum: '',
      enteredExpiration: '',
      enteredCVV: '',
      enteredBillingZip: ''
    }
  }

  render() {
    return (
    <>
      <span>Form3 is rendering!</span>
      <button next="Confirmation" onClick={this.props.buttonHandler}>Next</button>
    </>
    )
  }
}

export default Form3
import React from "react";
import { render } from "react-dom";

const HomePage = (props) => {
  if (props.alreadyPurchased) {
    return <span>Thank you for your purchase!</span>
  } else {
    return (
      <>
        🛒<br/>
        <button next="Form1" onClick={props.buttonHandler}>Checkout</button>
      </>
    )
  }
}

export default HomePage;
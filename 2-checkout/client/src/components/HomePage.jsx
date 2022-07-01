import React from "react";
import { render } from "react-dom";

const HomePage = (props) => (
  <>
    <span>HomePage is rendering!</span><br/>
    <button next="Form1" onClick={props.buttonHandler}>Checkout</button>
  </>
)

export default HomePage;
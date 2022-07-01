import React from "react";
import { render } from "react-dom";

const Confirmation = (props) => (
  <>
    <span>Confirmation is rendering!</span><br/>
    <button next="HomePage" onClick={props.buttonHandler}>Purchase</button>
  </>
)

export default Confirmation;
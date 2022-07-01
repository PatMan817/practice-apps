import React from "react";
import { render } from "react-dom";
import App from "./components/App.jsx";

render(
  <>
    <p>Hello, World!</p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
    <App/>
  </>,
  document.getElementById("root")
);

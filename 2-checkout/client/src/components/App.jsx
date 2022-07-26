import HomePage from "./HomePage.jsx";
import Form1 from "./Form1.jsx";
import Form2 from "./Form2.jsx";
import Form3 from "./Form3.jsx";
import Confirmation from "./Confirmation.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [fields, setFields] = useState({
    sessionId: document.cookie.slice(document.cookie.indexOf("s_id") + 5),
    name: "",
    email: "",
    password: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNum: "",
    CCNum: "",
    expiration: "",
    CVV: "",
    billingZip: "",
  });

  const [activePage, setActivePage] = useState("HomePage");
  const [alreadyPurchased, setAlreadyPurchased] = useState(false);

  useEffect(() => {
    axios.get("/checkout").then((res) => {
      if (res) {
        setAlreadyPurchased(true);
      }
    });
  }, []);

  const handleChange = (e) => {
    setFields((previousState) => {
      return { ...previousState, [e.target.id]: e.target.value };
    });
  };

  const buttonHandler = (e) => {
    e.preventDefault();
    let nextPage = e.target.getAttribute("next");
    setActivePage(nextPage);
  };

  const purchaseButtonHandler = () => {
    axios
      .post("/checkout", fields)
      .then((res) => alert(res.data))
      .catch((err) => console.error(err));
  };

  switch (activePage) {
    case "HomePage":
      return (
        <HomePage
          buttonHandler={buttonHandler}
          alreadyPurchased={alreadyPurchased}
        />
      );
    case "Form1":
      return (
        <Form1
          buttonHandler={buttonHandler}
          handleChange={handleChange}
          appState={fields}
        />
      );
    case "Form2":
      return (
        <Form2
          buttonHandler={buttonHandler}
          handleChange={handleChange}
          appState={fields}
        />
      );
    case "Form3":
      return (
        <Form3
          buttonHandler={buttonHandler}
          handleChange={handleChange}
          appState={fields}
        />
      );
    case "Confirmation":
      return (
        <Confirmation
          buttonHandler={buttonHandler}
          purchaseButtonHandler={purchaseButtonHandler}
          appState={fields}
        />
      );
    default:
      return <span>Error: Invalid Active Page</span>;
  }
}

export default App;

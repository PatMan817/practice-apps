//import React from "react";
import HomePage from './HomePage.jsx';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import Confirmation from './Confirmation.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';

//class App extends React.Component {
//  constructor(props) {
//    super(props)
//    this.state = {
//      sessionId: JSON.stringify(document.cookie, undefined, "\t").slice(6, -1),
//      name: '',
//      email: '',
//      password: '',
//      address1: '',
//      address2: '',
//      city: '',
//      state: '',
//      zipCode: '',
//      phoneNum: '',
//      CCNum: '',
//      expiration: '',
//      CVV: '',
//      billingZip: '',
//      activePage: 'HomePage',
//      alreadyPurchased: false
//    }
//  }
//
//  componentDidMount() {
//    axios.get('/checkout')
//      .then((res) => {
//        if (res) {
//          this.setState({ alreadyPurchased: true })
//        }
//      })
//  }

const App = () => {

  const [state, setState] = useState({
    sessionId: JSON.stringify(document.cookie, undefined, "\t").slice(6, -1),
    name: '',
    email: '',
    password: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNum: '',
    CCNum: '',
    expiration: '',
    CVV: '',
    billingZip: '',
    activePage: 'HomePage',
    alreadyPurchased: false
  })

  useEffect(() => {
    axios.get('/checkout')
      .then((res) => {
        if (res) {
          setState(previousState => {
            return { ...previousState, alreadyPurchased: true }
          });
        }
      })
  }, [])

  const handleChange = e => {
    setState(previousState => {
      return { ...previousState, [e.target.id]: e.target.value }
    });
  }

  const buttonHandler = e => {
    e.preventDefault();
    let nextPage = e.target.getAttribute('next');
    setState(previousState => {
      return { ...previousState, activePage: nextPage }
    });
  }

  const purchaseButtonHandler = () => {
    sendData()
      .then((res) => alert(res.data))
      .catch((err) => console.error(err))
  }

  const sendData = () => {
    let userData = state;
    delete userData['activePage'];
    delete userData['alreadyPurchased'];
    return axios.post('/checkout', userData)
      .then((res) => res)
      .catch((err) => console.error(err))
  }


  switch (state.activePage) {
    case 'HomePage':
      return <HomePage buttonHandler={buttonHandler} alreadyPurchased={state.alreadyPurchased} />;
    case 'Form1':
      return <Form1 buttonHandler={buttonHandler} handleChange={handleChange} appState={state} />;
    case 'Form2':
      return <Form2 buttonHandler={buttonHandler} handleChange={handleChange} appState={state} />;
    case 'Form3':
      return <Form3 buttonHandler={buttonHandler} handleChange={handleChange} appState={state} />;
    case 'Confirmation':
      return <Confirmation buttonHandler={buttonHandler} purchaseButtonHandler={purchaseButtonHandler} appState={state} />
    default:
      return <span>Error: Invalid Active Page</span>

  }
}

export default App;
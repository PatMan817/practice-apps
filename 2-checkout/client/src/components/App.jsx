import React from "react";
import HomePage from './HomePage.jsx';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import Confirmation from './Confirmation.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionId: JSON.stringify(document.cookie, undefined, "\t").slice(6, -1),
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      CCNum: '',
      expiration: '',
      CVV: '',
      billingZip: '',
      activePage: 'HomePage'
    }
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value})
  }

  buttonHandler(event) {
    event.preventDefault();
    console.log(event.target)
    let nextPage = event.target.getAttribute('next');
    this.setState({activePage: nextPage})
  }

  sendData() {
    let userData = this.state;
    delete userData['activePage'];
    axios.post('/checkout', userData)
  }

  render() {
    switch (this.state.activePage) {
      case 'HomePage':
        return <HomePage buttonHandler={this.buttonHandler.bind(this)}/>;
      case 'Form1':
        return <Form1 buttonHandler={this.buttonHandler.bind(this)} handleChange={this.handleChange.bind(this)} appState={this.state}/>;
      case 'Form2':
        return <Form2 buttonHandler={this.buttonHandler.bind(this)} handleChange={this.handleChange.bind(this)} appState={this.state}/>;
      case 'Form3':
        return <Form3 buttonHandler={this.buttonHandler.bind(this)} handleChange={this.handleChange.bind(this)} appState={this.state}/>;
      case 'Confirmation':
        return(
          <>
            <Confirmation buttonHandler={this.buttonHandler.bind(this)}/>
            <button onClick={this.sendData.bind(this)}>Send Data</button>
          </>
        )
      default:
        return <span>Error: Invalid Active Page</span>
    }
  }
}

export default App;
import React from "react";
import HomePage from './HomePage.jsx';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import Confirmation from './Confirmation.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionId: JSON.stringify(document.cookie),
      name: null,
      email: null,
      password: null,
      address1: null,
      address2: null,
      city: null,
      state: null,
      zipCode: null,
      CCNum: null,
      expiration: null,
      CVV: null,
      billZip: null,
      activePage: 'HomePage'
    }
  }

  buttonHandler(event) {
    let nextPage = event.target.getAttribute('next');
    this.setState({activePage: nextPage})
  }

  render() {
    switch (this.state.activePage) {
      case 'HomePage':
        return <HomePage buttonHandler={this.buttonHandler.bind(this)}/>;
      case 'Form1':
        return <Form1 buttonHandler={this.buttonHandler.bind(this)}/>;
      case 'Form2':
        return <Form2 buttonHandler={this.buttonHandler.bind(this)}/>;
      case 'Form3':
        return <Form3 buttonHandler={this.buttonHandler.bind(this)}/>;
      case 'Confirmation':
        return <Confirmation buttonHandler={this.buttonHandler.bind(this)}/>;
      default:
        return <span>Error: Invalid Active Page</span>
    }
  }
}

export default App;
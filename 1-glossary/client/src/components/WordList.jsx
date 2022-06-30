import React from 'react';

class WordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredWord: '',
      enteredDef: ''
    }
  }

  add() {
    this.props.onAdd(this.state.enteredWord, this.state.enteredDef)
  }

  enterWord (e) {
    this.setState({
      enteredWord: e.target.value
    });
  }

  enterDefinition (e) {
    this.setState({
      enteredDef: e.target.value
    });
  }

  render() {
    return (
    <div>
      <input id="wordInput" placeholder="Enter word" value={this.state.enteredWord} onChange={this.enterWord.bind(this)}></input>
      <input id="definitionInput" placeholder="Enter definition" value={this.state.enteredDef} onChange={this.enterDefinition.bind(this)}></input>
      <button onClick={this.add.bind(this)}>Add Word</button>
    </div>)
  }
}

export default WordList;
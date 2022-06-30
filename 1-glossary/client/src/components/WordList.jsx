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
    if (this.state.enteredWord === '' || this.state.enteredDef === '') {
      alert('Please enter word and definition')
    } else {
      this.props.onAdd(this.state.enteredWord, this.state.enteredDef)
      this.setState({enteredWord: '', enteredDef: ''})
    }
  }

  edit(e) {
    let index = e.target.id
    let newDef = prompt("Please enter new definition.")
    this.props.onAdd(this.props.filteredWords[index].word, newDef, index)
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
    let index = -1;
    return (
    <div>
      <div id="inputDiv">
        <input id="wordInput" placeholder="Enter word" value={this.state.enteredWord} onChange={this.enterWord.bind(this)}></input>
        <input id="definitionInput" placeholder="Enter definition" value={this.state.enteredDef} onChange={this.enterDefinition.bind(this)}></input>
        <button onClick={this.add.bind(this)}>Add Word</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tbody>
              {this.props.filteredWords.map((word) => {
                index++
                return (<tr>
                  <td>{word.word}</td>
                  <td>{word.definition}</td>
                  <td><button onClick={this.edit.bind(this)} className="editButton" id={index}>Edit</button></td>
                  <td><button onClick={this.props.deleteWord.bind(this)} className="deleteButton" id={index}>Delete</button></td>
                </tr>)
              }
              )}
          </tbody>
        </table>
      </div>
    </div>)
  }
}

export default WordList;
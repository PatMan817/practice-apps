import { useState } from 'react';

//class WordList extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      enteredWord: '',
//      enteredDef: ''
//    }
//  }

const WordList = props => {

  const [enteredWord, setEnteredWord] = useState('');
  const [enteredDef, setEnteredDef] = useState('');

  const add = () => {
    if (enteredWord === '' || enteredDef === '') {
      alert('Please enter word and definition')
    } else {
      props.onAdd(enteredWord, enteredDef)
      setEnteredWord('')
      setEnteredDef('')
    }
  }

  const edit = e => {
    let index = e.target.id
    let newDef = prompt("Please enter new definition.")
    props.onAdd(props.filteredWords[index].word, newDef, index)
  }

  const enterWord = e => {
    setEnteredWord(e.target.value);
  }

  const enterDefinition = e => {
    setEnteredDef(e.target.value);
  }

  let index = -1;
  return (
    <>
      <div id="inputDiv">
        <input id="wordInput" placeholder="Enter word" value={enteredWord} onChange={enterWord}></input>
        <input id="definitionInput" placeholder="Enter definition" value={enteredDef} onChange={enterDefinition}></input>
        <button onClick={add}>Add Word</button>
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
            {props.filteredWords.map((word) => {
              index++
              return (<tr>
                <td><b>{word.word}</b></td>
                <td>{word.definition}</td>
                <td><button onClick={edit} className="editButton" id={index}>Edit</button></td>
                <td><button onClick={props.deleteWord} className="deleteButton" id={word.word}>Delete</button></td>
              </tr>)
            }
            )}
          </tbody>
        </table>
      </div>
    </>)
}

export default WordList;
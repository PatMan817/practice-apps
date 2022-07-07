//import React from "react";
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import WordList from './components/WordList.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';

//class App extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      words: [],
//      filteredWords: []
//    }
//    this.search.bind(this);
//    this.getWords.bind(this);
//  }
//
//  componentDidMount() {
//    this.getWords();
//  }

const App = () => {

  const [words, setWords] = useState([]);
  const [filteredWords, setFilteredWords] = useState([]);

  //const [state, setState] = useState({
  //  words: [],
  //  filteredWords: []
  //})

  useEffect(() => {
    getWords();
  }, [])

  const addWord = (word, definition/*, wordIndex = -1*/) => {
    //let words = [...this.state.words];
    //for (let i = 0; i < words.length; i++) {
    //  if (words[i].word === word) {
    //    wordIndex = i
    //    break
    //  }
    //}
    //if (wordIndex !== -1) {
    //  words[wordIndex].definition = definition;
    //} else {
    //  words.push({ word: word, definition: definition });
    //}
    axios.post('/words', { word: word, definition: definition })
      .then((response) => alert(response.data))
      .then(() => getWords())
      .catch((error) => console.error(error))
    //this.setState({ words: words, filteredWords: words });
  }

  const deleteWord = e => {
    //let words = [...this.state.words];
    //let word = e.target.id;
    //console.log(word)
    //let wordIndex = -1
    //for (let i = 0; i < words.length; i++) {
    //  if (words[i].word === word) {
    //    wordIndex = i
    //    break
    //  }
    //}
    let deletedWord = { word: e.target.id };
    //words.splice(wordIndex, 1);
    console.log('deletedWord:', deletedWord)
    axios.delete('/words', { data: deletedWord })
      .then((response) => alert(response.data))
      .then(() => getWords())
      .catch((err) => console.error(err))
    //this.setState({ words: words, filteredWords: words });
  }

  const getWords = () => {
    axios.get('/words')
      .then((wordData) => {
      setWords(wordData.data)
      setFilteredWords(wordData.data)
      })
      .catch((err) => console.error(err))
  }

  const search = searchedTerm => {
    //let words = [...state.words];
    let results = [];
    console.log(searchedTerm)
    for (let i = 0; i < words.length; i++) {
      if (words[i].word.includes(searchedTerm) || words[i].definition.includes(searchedTerm)) {
        results.push(words[i])
      }
    }
    setFilteredWords(results)
  }

  return (
    <div>
      <h1>Glossary</h1>
      <Search search={search} />
      <WordList filteredWords={filteredWords} deleteWord={deleteWord} onAdd={addWord} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
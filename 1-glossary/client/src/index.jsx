import React from "react";
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx'
import WordList from './components/WordList.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      filteredWords: []
    }
    this.search.bind(this);
    this.getWords.bind(this);
  }

  componentDidMount() {
    this.getWords();
  }

  addWord(word, definition, wordIndex = -1) {
    let words = [...this.state.words];
    for (let i = 0; i < words.length; i++) {
      if (words[i].word === word) {
        wordIndex = i
        break
      }
    }
    if (wordIndex !== -1) {
      words[wordIndex].definition = definition;
    } else {
      words.push({ word: word, definition: definition });
    }
    axios.post('/words', { word: word, definition: definition })
      .then((response) => alert(response.data))
      .catch((error) => console.error(error))
    this.setState({ words: words, filteredWords: words });
  }

  deleteWord(e) {
    let words = [...this.state.words];
    let word = e.target.id;
    console.log(word)
    let wordIndex = -1
    for (let i = 0; i < words.length; i++) {
      if (words[i].word === word) {
        wordIndex = i
        break
      }
    }
    let deletedWord = words[wordIndex];
    words.splice(wordIndex, 1);
    axios.delete('/words', { data: deletedWord })
      .then((response) => alert(response.data))
      .catch((err) => console.error(err))
    this.setState({ words: words, filteredWords: words });
  }

  getWords() {
    axios.get('/words')
      .then((wordData) => this.setState({ words: wordData.data, filteredWords: wordData.data }))
      .catch((err) => console.error(err))
  }

  search(searchedTerm) {
    let words = [...this.state.words];
    let results = [];
    console.log(searchedTerm)
    for (let i = 0; i < words.length; i++) {
      if (words[i].word.includes(searchedTerm) || words[i].definition.includes(searchedTerm)) {
        results.push(words[i])
      }
    }
    this.setState({ filteredWords: results })
  }

  render() {
    return (
      <div>
        <h1>Glossary</h1>
        <Search search={this.search.bind(this)} />
        <WordList filteredWords={this.state.filteredWords} deleteWord={this.deleteWord.bind(this)} onAdd={this.addWord.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
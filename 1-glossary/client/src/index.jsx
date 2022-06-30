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

  addWord(word, definition) {
    console.log(`Word ${word} was added with definition ${definition}.`)
    let words = [...this.state.words];
    if (words.indexOf(word) !== -1) {
      words[words.indexOf(word)] definition
    } else {
      words.push({word: word, definition: definition});
    }
    axios.post('/words', {word: word, definition: definition})
      .then((response) => alert(response.data))
      .catch((error) => console.error(error))
    this.setState({words: words, filteredWords: words});
  }

  deleteWord(e) {
    console.log(`Word ${e.target.id} has been deleted.`)
    let words = [...this.state.words];
    let wordIndex = e.target.id;
    let deletedWord = words[wordIndex];
    console.log('delete in APP', deletedWord)
    words.splice(wordIndex, 1);
    axios.delete('/words', {data: deletedWord})
      .then((response) => alert(response.data))
      .catch((err) => console.error(err))
    this.setState({words: words, filteredWords: words});
  }

  getWords() {
    axios.get('/words')
      .then((wordData) => this.setState({words: wordData.data, filteredWords: wordData.data}))
      .catch((err) => console.error(err))
  }

  search(term) {

  }

  render () {
    return (
    <div>
      <h1>Glossary</h1>
      <Search />
      <WordList filteredWords={this.state.filteredWords} deleteWord={this.deleteWord.bind(this)} onAdd={this.addWord.bind(this)}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
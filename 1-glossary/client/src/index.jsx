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
    //this.addWord.bind(this);
    this.search.bind(this);
  }

  //componentDidMount() {
  //  this.getWords();
  //}

  addWord(word, definition) {
    console.log(`Word ${word} was added with definition ${definition}.`)
    let words = [...this.state.words];
    words.push({word: word, definition: definition});
    axios.post('/words', {word: word, definition: definition})
      .then((response) => alert(response))
      .catch((error) => console.error(error))
    this.setState({words: words});
  }

  getWords() {
    axios.get('/words')
      .then((wordData) => this.setState({words: JSON.parse(wordData)}))
      .catch((err) => console.error(err))
  }

  search(term) {

  }

  render () {
    return (
    <div>
      <h1>Glossary</h1>
      <WordList onAdd={this.addWord.bind(this)}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import WordList from './components/WordList.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {

  const [words, setWords] = useState([]);
  const [filteredWords, setFilteredWords] = useState([]);

  useEffect(() => {
    getWords();
  }, [])

  const addWord = (word, definition) => {
    axios.post('/words', { word: word, definition: definition })
      .then((response) => alert(response.data))
      .then(() => getWords())
      .catch((error) => console.error(error))
  }

  const deleteWord = e => {
    let deletedWord = { word: e.target.id };
    console.log('deletedWord:', deletedWord)
    axios.delete('/words', { data: deletedWord })
      .then((response) => alert(response.data))
      .then(() => getWords())
      .catch((err) => console.error(err))
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
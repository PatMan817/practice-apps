import ReactDOM from "react-dom";
import Search from "./components/Search.jsx";
import WordList from "./components/WordList.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [words, setWords] = useState([]);
  const [filteredWords, setFilteredWords] = useState([]);

  useEffect(() => {
    getWords();
  }, []);

  function getWords() {
    axios
      .get("/words")
      .then((wordData) => {
        setWords(wordData.data);
        setFilteredWords(wordData.data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <h1>Glossary</h1>
      <Search words={words} setFilteredWords={setFilteredWords} />
      <WordList filteredWords={filteredWords} getWords={getWords} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

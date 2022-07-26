import { useRef } from "react";

function Search({ words, setFilteredWords }) {
  const searchRef = useRef();

  function search() {
    let results = [];
    console.log(searchedTerm);
    for (let i = 0; i < words.length; i++) {
      if (
        words[i].word.includes(searchRef.current.value) ||
        words[i].definition.includes(searchRef.current.value)
      ) {
        results.push(words[i]);
      }
    }
    setFilteredWords(results);
  }

  return (
    <>
      <input
        placeholder="Definition or word"
        onChange={search}
        ref={searchRef}
      ></input>
      <button onClick={search}>Search</button>
    </>
  );
}

export default Search;

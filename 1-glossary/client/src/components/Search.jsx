import { useRef } from "react";

function Search(props) {
  const searchRef = useRef();

  function search() {
    props.search(searchRef.current.value);
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

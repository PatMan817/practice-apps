import { useRef } from 'react';

const Search = props => {

  const searchRef = useRef();

  const search = () => {
    props.search(searchRef.current.value)
  }

  return (
    <>
      <input placeholder="Definition or word" onChange={search} ref={searchRef}></input>
      <button onClick={search}>Search</button>
    </>)
}

export default Search
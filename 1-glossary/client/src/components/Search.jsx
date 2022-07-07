import { useState } from 'react';

//class Search extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      enteredWord: '',
//    }
//  }

const Search = props => {

  const [enteredWord, setEnteredWord] = useState('');

  const enterWord = e => {
    setEnteredWord(e.target.value);
  }

  const search = () => {
    props.search(enteredWord)
  }

    return (
      <>
        <input placeholder="Definition or word" value={enteredWord} onChange={enterWord}></input>
        <button onClick={search}>Search</button>
      </>)
}

export default Search
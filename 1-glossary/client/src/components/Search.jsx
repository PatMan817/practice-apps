import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredWord: '',
    }
  }

  enterWord (e) {
    this.setState({
      enteredWord: e.target.value
    });
  }

  search() {
    this.props.search(this.state.enteredWord)
  }

  render() {
    return (
    <div>
      <input placeholder="Definition or word" value={this.state.enteredWord} onChange={this.enterWord.bind(this)}></input>
      <button onClick={this.search.bind(this)}>Search</button>
    </div>)
  }

}

export default Search
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

  render() {
    return (
    <div>
    </div>)
  }

}

export default Search
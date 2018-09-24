import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
	  super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e)
  {
    e.preventDefault();
    alert("button clicked! "+e.target.innerText);
    console.log(e)
  }

  render() {
    return (
      <div id="container">
        HI
        <br />
        <button onClick={this.handleClick}>Sports</button>
      </div>
    );
  }
}

export default App;

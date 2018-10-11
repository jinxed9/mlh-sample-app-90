import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //Initialize the state
  state = {tweets:[]}
  
  getTweets = () => {
	  //Get the tweets and store them in the state
	  fetch('/api/tweets')
		.then(res => res.json())
		.then(tweets => this.setState({ tweets }));
  }
  
  componentDidMount(){
	  this.getTweets();
  }
  
  render() {
	  
	const { tweets } = this.state;
	
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //Initialize the state
  state = {tweets:[]}
  
  getTweets = () => {
	  //Get the tweets and store them in the state
//	  fetch('/api/tweets')
//		.then(res => res.json())
//		.then(tweets => this.setState({ tweets }));
  }
  
  componentDidMount(){
	  this.getTweets();
  }
  
  render() {
	  
	const { tweets } = this.state;
	
    return (
		<div className="App">
			<h1>MLH Sample App</h1>
			<div className="container">
			  <ul className="dashboard-list">
				<li key="1">
				  <div className='tweet'>
					<div className='tweet-info'>
					  <div>
						<span>Major League Hacking</span>
						<div>10/10/17</div>
						<p>This is what we were tweeting about on this date!</p>
					  </div>    
					  <div className='tweet-icons'>
						<span>Replys</span>
						<span>Likes</span>
					  </div>
					</div>
				  </div>
				</li>
				<li key="2">
				  <div className='tweet'>
					<div className='tweet-info'>
					  <div>
						<span>Major League Hacking</span>
						<div>10/10/17</div>
						<p>This is what we were tweeting about on this date!</p>
					  </div>    
					  <div className='tweet-icons'>
						<span>Replys</span>
						<span>Likes</span>
					  </div>
					</div>
				  </div>
				</li>
				<li key="3">
				  <div className='tweet'>
					<div className='tweet-info'>
					  <div>
						<span>Major League Hacking</span>
						<div>10/10/17</div>
						<p>This is what we were tweeting about on this date!</p>
					  </div>    
					  <div className='tweet-icons'>
						<span>Replys</span>
						<span>Likes</span>
					  </div>
					</div>
				  </div>
				</li>
			  </ul>
			</div>
      </div>
    );
  }
}

export default App;

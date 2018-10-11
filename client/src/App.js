import React, { Component } from 'react';
import './App.css';
import Tweet from './components/Tweet'
import axios from 'axios';

class App extends Component {
  //Initialize the state
  state = {statuses:[]}
  
  
  componentDidMount(){
	  axios.get('https://salty-ridge-74365.herokuapp.com/api/tweets')
      .then(response => {
      	let statuses = response.data.statuses
      	this.setState({statuses})
      	console.log(statuses)
      })
  }
  
  render() {

  	let tweets = this.state.statuses;

	console.log(tweets);
	
    return (
		<div className="App">
			<h1>MLH Sample App</h1>
			<div className="container">
			  <ul className="dashboard-list">
				{tweets.map(index => (
					<li key={index.id}>
						<Tweet author={index.user.name} date={index.created_at} text={index.text} pic={index.user.profile_image_url}/>
					</li>
				))}	
			  </ul>
			</div>
      </div>
    );
  }
}

export default App;

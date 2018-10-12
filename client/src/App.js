import React, { Component } from 'react'; 
import './App.css';  /* Import our styling. This can be modified as you see fit */
import Tweet from './components/Tweet' /* Import our tweet component from the components folder */
import axios from 'axios'; /* Import axios. We will use this to make our http requests to our backend */

class App extends Component {
  /* 
  	We will initialize the state to an empty array.
	Later, we will populate this array with our tweets.
  */
  state = {statuses:[]}
  
  
  /*
	componentDidMount()
		This function is executed when the page has loaded and is ready for data.
		Your calls to your backend should be in this function.
  */
  componentDidMount(){

  	/*
		We are using axios to send the GET request to our backend.
		For development, our backend API endpoint is at
			http://localhost:5000/api/tweets.
		For production, our backend API endpoint is at
			https://salty-ridge-74365.herokuapp.com/api/tweets
		When we push the app into proudction, we need to remember to switch
		the get request from "http://localhost5000 ... " to 
		"https://salty-ridge-743 ..."  If we don't make the switch, the client
		will make its API call to the wrong place!
  	*/
	  //axios.get('http://localhost:5000/api/tweets') /*This is for development */
	  axios.get('https://salty-ridge-74365.herokuapp.com/api/tweets') /* This is for production */
      .then(response => {
      	let statuses = response.data.statuses
      	this.setState({statuses})
      })
  }
  
  /* The render function is what makes our UI */
  render() {
  	/*Put any logic, parsing, or debugging output here */
  	let tweets = this.state.statuses;
	console.log(tweets);
    return (
    	/*And put your UI that you'd like to display, here */
		<div className="App">
			<h1>MLH Sample App</h1>
			<div className="container">
			  <ul className="dashboard-list">
				{tweets.map(index => ( /* 
											We are just iterating over the array of 
											tweets and creating a Tweet component for each item in the array
										*/
					<li key={index.id}>
						<Tweet author={index.user.name} date={index.created_at} text={index.text} pic={index.user.profile_image_url}/>
					</li> 	/* 
								This is our tweet component. Its responsible for displaying the data we pass to it.
								To see more, check out ./components/Tweet.js 
							*/
				))}	
			  </ul>
			</div>
      </div>
    );
  }
}

export default App;

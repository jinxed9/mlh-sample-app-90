/*
	The backend server operates in a very simple manner.
	Every 5 minutes, it makes a request to the the Twitter API for the
	latest Tweets. 

	When the latest tweets are recieved, the server updates its local
	tweets variable with the tweets recieved. 

	This is called polling. 

	Each time our frontend is loaded in the browser, it makes a request
	to the backend for the local tweets variable. When the frontend recieves
	the tweets, it displays them. 

	[Our Server] --- Every 5 minutes ----> [Twitter API]

	[Our Frontend] ---- When it loads -----> [Our Server]

*/


const express = require('express')  /* This is the framework for our backend server */
const path = require('path')	/* This is a module the provides an easy way to work with files and directories */
const twit = require('twit') /* This is the library we are going to use to access the twitter API */
let config = require('./config.js') /* We need to import our config.js, so we can initialize our "twit" module */


/* Init our Twitter object with credentials we specified in Config.js */
const Twitter = new twit(config)

/*Init our express app */
const app = express()

/* Init our tweet variable */
let tweets

/* 
	Here we will define our function that makes 
	the request to the Twitter API 
*/
let getMlhacksTweets = function(){
	/* 
		You can make all sorts of requests to the Twitter API, so we have to 
		specify what sort of request we want to make. 

		For more information, see the Twitter API documetation:
		https://developer.twitter.com/en/docs/api-reference-index.html

		And the "twit" module documentation: 
		https://www.npmjs.com/package/twit 
	*/
	let params = {
		q: '@MLHacks', /* 'q:' specifies a query referencing '@MLHacks' */
		result_type: 'recent', /* We want the most recent tweets */
		lang: 'en' /* We'd like tweets in english */
	}
	

	/*Lets make the 'search' request for 'tweets' to the twitter API */
	Twitter.get('search/tweets', params, function(err, data){
		
		/*If there are no errors with our request...*/
		if(!err){
			console.log('Tweets Retrieved') 
			tweets = data /* Assign our local tweets variable the new data */
		}
		/*If we have an error, then just write to console */
		else {
			console.log('Something went wrong while searching...')
		}
	});
}

/* 
	We need to set up our server and define how the 
	frontend will get the the UI and the tweets from 
	the server.
*/ 

/* 
	We need to tell the server where to find the files for the UI. In this case, we
	pointed it towards the 'client/build' directory 
*/
app.use(express.static(path.join(__dirname,'client/build')))
app.use(function (req, res, next) {

    /*
    	These are the websites that we will allow to make requests from our server. 
		In this case, we want to allow or local development domain (http://localhost:3000)
		and our production domain (https://salty-ridge-74...)
    */
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000', 'https://salty-ridge-74365.herokuapp.com/')

    /* These are the requests we will allow. In this case, we only need to allow GET requests. */
    res.setHeader('Access-Control-Allow-Methods', 'GET')

    /* Pass to next layer of middleware */
    next();
});

/*Define our API as "/api/tweets". This is where our frontend will make requests.*/
app.get('/api/tweets',(req,res) => {
	console.log("GET:API") /* Write to console each time a GET request has been recieved */
	res.json(tweets)		/* Send the tweets data as a response */ 
});

/*
	The 'catch all' handler: for any request that doesn't match the one above,
	send back React's index.html file.
*/
app.get('*', (req,res) => {
	console.log("GET: Catchall")
	res.sendFile(path.join(__dirname+'/client/build/index.html'))
});

/*
	Finally, we need to start our backend server.
	We define the port we want the server to listen on and then start the sever.
*/
const port = process.env.PORT || 5000;
app.listen(port, () => {
	/*
		First, we want to initiailze our tweet data when the server starts.
		If we don't do this, we will have to wait 5 minutes before we will have
		any useful data.
	*/
	getMlhacksTweets()
	
	/*
		Next, set our tweet data to update every 5 minutes (60000 milliseconds)
	*/
	setInterval(getMlhacksTweets,60000)
	console.log(`Server running on port ` + port) /* ... and log that the server is actually running! */

});
const express = require('express')
const path = require('path')
const twit = require('twit')
var config = require('./config.js')


//initialize our Twitter object with credentials we specified in Config.js
const Twitter = new twit(config);

//initailze our express app.
const app = express();

let tweets;

var getMlhacksTweets = function(){
	var params = {
		q: '@MLHacks',
		result_type: 'recent',
		lang: 'en'
	}
	
	Twitter.get('search/tweets', params, function(err, data,response){
		//if there are no errors
		if(!err){
			//console.log(data);
			console.log('Tweets Retrieved')
			tweets = data
			globalTweets = data;
		}
		//if unable to Search a tweet
		else {
			console.log('Something went wrong while searching...');
		}
	});

}


// Serve static files from the React app
app.use(express.static(path.join(__dirname,'client/build')));

// Put all API endpoinds under '/api'
app.get('/api/tweets',(req,res) => {
	console.log("GET:API")
	res.json(tweets)
});

//The 'catch all' handler: for any request that doesn't match the one above,
// send back React's index.html file.

app.get('*', (req,res) => {
	console.log("GET: Catchall")
	res.sendFile(path.join(__dirname+'/client/build/index.html'))
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	//init our tweet object when the server starts
	getMlhacksTweets()
	
	//set our tweet object to update every 5 minutes.
	setInterval(getMlhacksTweets,60000)
	console.log(`Server running on port {port}`)
});
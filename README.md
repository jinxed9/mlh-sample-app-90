# mlh-sample-app-90
A Twitter Bot with Node.js, Express.js, and React


-- Resources --
Express:
https://expressjs.com/en/api.html
https://expressjs.com/en/starter/hello-world.html

Twit NPM module:
https://www.npmjs.com/package/twit

Axios NPM module:
https://www.npmjs.com/package/axios

How do deploy Express, React, using Heroku:
https://daveceddia.com/deploy-react-express-app-heroku/
https://github.com/dceddia/rando

Twitter Bot:
https://hackernoon.com/create-a-simple-twitter-bot-with-node-js-5b14eb006c08

Twitters API:
Using twitters Stanard level Search API product (free)
Allows the user to scrape tweets that have been posted up to 7 days ago. 
https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets.html
$ curl --request GET 
 --url 'https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular' 
 --header 'authorization: OAuth oauth_consumer_key="consumer-key-for-app", 
 oauth_nonce="generated-nonce", oauth_signature="generated-signature", 
 oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp", 
 oauth_token="access-token-for-authed-user", oauth_version="1.0"'

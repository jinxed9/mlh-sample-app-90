# mlh-sample-app-90
A Twitter Bot with Node.js, Express.js, and React

-- Project Structure --
The project is composed of a backend (Node, Express) and a frontend (React)
The backend is at the root, with most of the code in index.js.
The frontend is located in the 'client' folder. 

-- Getting Started --
The best way to get started with this project would be to clone the repo to a local directory.
- Install the dependencies with the 'npm install' command (you may need to do this twice, once for the frontend and once for the backend). 
- start the backend dev server with the 'node index.js' command.
- cd to the client/src direcotry and start the client dev server with 'yarn start' or 'npm start'
- open the client/src/App.js file and change 'axios.get('https://somedomain')' to 'axios.get('http://localhost:yourport')',
'yourport' being the port that your backend server is running on. 
- you may also need to edit the backend index.js file to allow your frontend to make requests. 

-- Resources --
- Express:
https://expressjs.com/en/api.html
https://expressjs.com/en/starter/hello-world.html

- Twit NPM module:
https://www.npmjs.com/package/twit

- Axios NPM module:
https://www.npmjs.com/package/axios

- How do deploy Express, React, using Heroku:
https://daveceddia.com/deploy-react-express-app-heroku/
https://github.com/dceddia/rando

- Twitter Bot:
https://hackernoon.com/create-a-simple-twitter-bot-with-node-js-5b14eb006c08

- Twitters API:
Using twitters Stanard level Search API product (free)
Allows the user to scrape tweets that have been posted up to 7 days ago. 
https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets.html

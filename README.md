# sentiment-tweet

## About the Project
Utilizes React and NodeJS to create an web application that retrieves tweets for sentiment analysis.
Tweets are retrieved with the Twitter API using Twit, and sentiment analysis is using AFINN-165 

React is used for the frontend and is on localhost:3000/
NodeJS is used for the backend server on localhost:5000/

## Set Up
To set up the project you will need to install the node modules in both projects.
```sh
$ cd frontend
$ yarn install
$ cd ../backend
$ yarn install
```
Create a .env file and input your Twitter API credentials, gotten from the Twitter Development Portal

## Running the Project
Both the Node server and the React Application will need to be run simultaneously.
### Start the Server
To start the server you need to call these commands
```sh
$ cd backend
$ yarn start
```
This server should now be running on port 5000.

### Start the Application
To start the app you need to call 
```sh
$ cd frontend
$ yarn start
```
This will start the react application on port 3000.

![alt text](<./image.jpg>)


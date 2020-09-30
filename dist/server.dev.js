"use strict";

var express = require('express');

var app = express();

var fetch = require('node-fetch');

var Sentiment = require('sentiment');

var sentiment = new Sentiment();

var Twit = require('twit');

var path = require('path');

require('dotenv').config();

app.listen(process.env.PORT || 8080, function () {
  return console.log("Listening on 8080");
});
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express["static"]('client/build'));
}

app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
}); // Routes

app.post('/', function (req, res) {
  console.log(req.body);
  var query = req.body.query;
  var tweets = searchTweet(query);
  asignScore(tweets).then(function (data) {
    return res.json(data);
  });
}); // Initializes Twit object to access API functions.

var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
  strictSSL: true
}); // Requests tweets from Twitter API.

function searchTweet(searchQuery) {
  var tweets;
  return regeneratorRuntime.async(function searchTweet$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(T.get('search/tweets', {
            q: searchQuery + '-filter:retweets',
            count: 50,
            lang: 'en',
            tweet_mode: 'extended'
          }));

        case 2:
          tweets = _context.sent;
          return _context.abrupt("return", tweets.data.statuses);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
} // Asigns each tweet a score based on the AFINN-en-165 sentiment analysis.


function asignScore(tweets) {
  var tweetList, result;
  return regeneratorRuntime.async(function asignScore$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(tweets);

        case 2:
          tweetList = _context2.sent;

          for (i = 0; i < tweetList.length; i++) {
            result = sentiment.analyze(tweetList[i].full_text);
            console.log(result);
            tweetList[i].score = result;
          }

          return _context2.abrupt("return", tweetList);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}
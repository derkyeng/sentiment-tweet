const express = require('express');
const app = express()
const fetch = require('node-fetch')
const Sentiment = require('sentiment')
const sentiment = new Sentiment();
const Twit = require('twit')
require('dotenv').config();

const port = 5000
app.listen(port, () => console.log(`Listening on ${port}`))
app.use(express.json());

app.post('/post', (req, res) => {
    console.log(req.body)
    let query = req.body.query
    let tweets = searchTweet(query)
    asignScore(tweets).then(data => res.json(data))
})



var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000,
    strictSSL: true,
})

async function searchTweet(searchQuery) {
    const tweets = await T.get('search/tweets', {q: searchQuery + '-filter:retweets', count: 50, lang: 'en'})
    //console.log(tweets.data.statuses)
    return tweets.data.statuses
}

async function asignScore(tweets) {
    let tweetList = await tweets
    for (i = 0; i < tweetList.length; i++){
        var result = sentiment.analyze(tweetList[i].text);
        tweetList[i].score = result 
    }
    return tweetList
}




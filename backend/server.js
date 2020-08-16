const express = require('express');
const app = express()
const fetch = require('node-fetch')
const Twit = require('twit')
require('dotenv').config();

const port = 5000
app.listen(port, () => console.log(`Listening on ${port}`))
app.use(express.json());

app.get('/hi', (req, res) => {
    let tweets = []
    searchTweet('covid').then(data => res.json(data))
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
    const tweets = await T.get('search/tweets', {q: searchQuery + '-filter:retweets', count: 10, lang: 'en'})
    return tweets.data.statuses
}

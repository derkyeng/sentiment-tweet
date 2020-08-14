const express = require('express');
const app = express()
const fetch = require('node-fetch')
const Twit = require('twit')
require('dotenv').config();

const port = 5000

app.get('/hi', (req, res) => res.send(['hello', 'no']))

app.listen(port, () => console.log(`Listening on ${port}`))

console.log(process.env.CONSUMER_KEY)

var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000,
    strictSSL: true,
})

T.get('search/tweets', { q: 'banana since:2011-07-11', count: 1 }, function(err, data, response) {
    console.log(data)
  })

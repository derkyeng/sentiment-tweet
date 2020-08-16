import React from 'react'
//import Tweets from './Tweets'
import axios from 'axios'
import { useState, useEffect } from 'react'


function App() {
  const [tweets, setTweets] = useState([])

  const fetchTweets = () =>{
    axios.get('/hi').then(
      res => {
        setTweets(res.data)
      }
    )
  }
  useEffect(() => {
    fetchTweets();
  }, []);
  console.log(setTweets)

  return (
    <div>
      {tweets.map((tweet) => <p>{tweet.text}</p>)}
    </div>
  )
}

export default App;

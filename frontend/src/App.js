import React from 'react'
//import Tweets from './Tweets'
import axios from 'axios'
import { useState, useEffect } from 'react'


const App = () => {
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

  console.log(tweets)

  function renderTweets(){
    return(
      <div>
        {tweets.map(tweet => 
          <div key={tweet.id}>
            <h1>{tweet.user.name}</h1>
            <h3>{'@' + tweet.user.screen_name}</h3>
            <p>{tweet.text}</p>
          </div>
        )}
      </div>

    )
  }

  return (
    <div>
      {renderTweets()}
    </div>
  )
}

export default App;

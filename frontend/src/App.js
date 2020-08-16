import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Tweets from './components/Tweets'


const App = () => {
  const [tweets, setTweets] = useState([])

  const fetchTweets = (searchQuery) =>{
    axios.post('/post', {query: searchQuery}).then(
      res => {
        setTweets(res.data)
      }
    )
  }
  useEffect(() => {
    fetchTweets('');
  }, []);

  const submit = (event) => {
    event.preventDefault()
    fetchTweets(event.target.value)
  }

  console.log(tweets)


  return (
    <div>
      <form onSubmit={submit}>
        <input type='text'></input>
      </form>
      {tweets.map((tweet, i) => 
          <Tweets key={i} tweet={tweet} />
      )}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
}

export default App;

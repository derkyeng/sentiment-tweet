import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import Tweets from './components/Tweets'


const App = () => {
  const [tweets, setTweets] = useState([])
  const [query, setQuery] = useState()

  const fetchTweets = (searchQuery) =>{
    axios.post('/post', {query: searchQuery}).then(
      res => {
        setTweets(res.data)
      }
    )
  }

  const handleQueryChange = (event) => {       
    setQuery(event.target.value)  
  }

  const submit = (event) => {
    event.preventDefault()
    fetchTweets(query)
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' onChange={handleQueryChange}/>
        <input type='submit' />
      </form>
      {tweets.map((tweet, i) => 
          <Tweets key={i} tweet={tweet} />
      )}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
}

export default App;

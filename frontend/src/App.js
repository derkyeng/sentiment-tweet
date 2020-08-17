import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import Tweets from './components/Tweets'


const App = () => {
  const [tweets, setTweets] = useState([])
  const [query, setQuery] = useState()

  // Request tweets from server.
  const fetchTweets = (searchQuery) =>{
    axios.post('/post', {query: searchQuery}).then(
      res => {
        setTweets(res.data)
      }
    )
  }

  // Handles the change of input in the search bar.
  const handleQueryChange = (event) => {       
    setQuery(event.target.value)  
  }

  // When input is submitted, fetch tweets from server.
  const submit = (event) => {
    event.preventDefault()
    fetchTweets(query)
  }

  // If there are no searches show text.
  const noSearches = () =>{
      if(!tweets?.length){
        return (
          <h2 className='noSearch'>Enter a topic to find tweets</h2>
        )
      }
  }


  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' onChange={handleQueryChange}/>
      </form>
      {noSearches()}
      {tweets.map((tweet, i) => 
          <Tweets key={i} tweet={tweet} />
      )}
    </div>
  )
}

export default App;

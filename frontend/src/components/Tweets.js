import React from 'react'

function Tweets({tweet}){
    return(
        <div>
            <h2>{tweet.user.name}</h2>
            <h3>{'@' + tweet.user.screen_name}</h3>
            <p>{tweet.text}</p>
            <p>{tweet.score.score}</p>
        </div>

    )
}

export default Tweets
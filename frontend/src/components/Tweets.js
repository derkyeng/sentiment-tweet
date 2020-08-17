import React from 'react'
import '../tweet.css'
import happy from '../imgs/happy.png'
import sad from '../imgs/sad.png'
import neutral from '../imgs/neutral.png'

function Tweets({tweet}){

    // Show an emotion based on the score of tweet.
    const sentimentImage = () =>{
        console.log(tweet.score)
        if (tweet.score.score > 0 ){
            return (
                <img src={happy}  alt='happy'/>
            )
        }
        else if (tweet.score.score < 0){
            return (
                <img src={sad} alt='sad'/>
            )
        }
        else{
            return (
                <img src={neutral}  alt='neutral'/>
            )
        }
    }

    return(
        <div className='tweet'>
            <h2>{tweet.user.name}</h2>
            <h3>{'@' + tweet.user.screen_name}</h3>
            <p>{tweet.full_text}</p>
            {sentimentImage()}
            <p>Score: {tweet.score.score}</p>
        </div>

    )
}

export default Tweets
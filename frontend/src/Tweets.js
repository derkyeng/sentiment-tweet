import React, {Component} from 'react'
import axios from 'axios'

export default class Tweets extends Component{
    constructor() {
        super();
        this.state = {
            tweets: 'Not yet gotten'
        }
    }

    componentDidMount() {
        axios.get('/hi').then(response =>{
            this.setState({
                weather: response.data
            })
        })
    }

    render() {
        return(
            <div>
                <button>Get Weather in Toronto</button>
                <h1>Weather is {this.state.weather}</h1>
            </div>
        )
    }
}
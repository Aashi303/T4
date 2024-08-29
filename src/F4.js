import React,{ useState,useEffect } from 'react'
import axios from "axios";
const F4 = () =>
{
    const[joke,setJoke]=useState('');

    function fetchJoke(){
        axios
        .get("https://official-joke-api.appspot.com/random_joke")
        //.get('https://dog.ceo/api/breeds/image/random')
        .then((response)=>{setJoke(response.data);})
        .catch((error)=>{console.error(error);})
    }
    useEffect(fetchJoke)
      
    return(
        <div>
        <h1>{joke.setup}</h1>
        <h3>{joke.punchline}</h3>
        <button onClick={fetchJoke} >Generate Joke </button>
        </div>
    )
}
export default F4


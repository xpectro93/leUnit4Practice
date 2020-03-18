import React, { useState, useEffect } from 'react';
import { useInput } from '../utils/customHook'
import secret from '../secret.json'
import DisplayQuery from './DisplayQuery';
// https://www.googleapis.com/youtube/v3/videos?id=$videoId&key=$GoogleApiKey&part=snippet
//www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&order=relevance&q=the%20strokes&type=video&videoEmbeddable=true&key=[YOUR_API_KEY]

// let res = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${secret.api_key}&part=snippet&q=${searchInputs}`);
const Home = _ => {
  const searchInput = useInput('');

      document.title = 'Hey Now!'
  return (
   <div className={"container"}>
     <form id={"search-form"}>
      <input {...searchInput} />
      <button type={"submit"}>Search</button>
     </form>
     
     <DisplayQuery response={ secret.test_query.items}/>
   </div>
  )
}

export default Home;
/* <img src='https://media.giphy.com/media/13DKrIw6LuPYha/giphy.gif' alt='et'/> */
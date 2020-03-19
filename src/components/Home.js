import React from 'react';
import { useInput } from '../utils/customHook'
import secret from '../secret.json'
import DisplayQuery from './DisplayQuery';
import axios from 'axios'
// https://www.googleapis.com/youtube/v3/videos?id=$videoId&key=$GoogleApiKey&part=snippet
//www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&order=relevance&q=the%20strokes&type=video&videoEmbeddable=true&key=[YOUR_API_KEY]

// let res = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${secret.api_key}&part=snippet&q=${searchInputs}`);
// await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${secret.api_key}&part=snippet&q=${searchInput.value}`);
const Home = _ => {
  const searchInput = useInput('');
  const [ queryResults, setQueryResults] = React.useState([]);
  const makeQuery = async _ =>  await axios.get(`https://www.googleapis.com/youtube/v3/search?maxResults=8&type=video&key=${secret.api_key}&part=snippet&q=${searchInput.value}`);
  
  const handleSubmit = async e => {
    e.preventDefault();
    try{
      let response = await makeQuery();
      setQueryResults(response.data.items)
      document.title = `Lookin at ${searchInput.value}`
    } catch (err){
      console.log(err);
      document.title = 'An Opsie Occured'
    }

  }

      console.log(searchInput)
  return (
   <div className={"container"}>
     <form id={"search-form"} onSubmit={handleSubmit}>
      <input {...searchInput} />
      <button type={"submit"}>Search</button>
     </form>
     
     {queryResults.length ? <DisplayQuery response={ queryResults}/> : <h1>Search for something</h1>}
   </div>
  )
}

export default Home;
/* <img src='https://media.giphy.com/media/13DKrIw6LuPYha/giphy.gif' alt='et'/> */
import React from 'react';
import { useInput } from '../utils/customHook'
import secret from '../secret.json'
import DisplayQuery from './DisplayQuery';
import axios from 'axios'

const Home = _ => {
  const searchInput = useInput('');
  const [ queryResults, setQueryResults] = React.useState([]);
  const makeQuery = async _ =>  await axios.get(`https://www.googleapis.com/youtube/v3/search?maxResults=8&type=video&key=${secret.api_key}&part=snippet&q=${searchInput.value}`);
  
  const handleSubmit = async e => {
    e.preventDefault();
    try{
      let response = await makeQuery();
      setQueryResults(response.data.items)
      document.title = `Searching for -> ${searchInput.value}`
    } catch (err){
      console.log(err);
      document.title = 'An Opsie Occured'
    }

  }
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
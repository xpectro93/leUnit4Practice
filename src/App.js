import React, {useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import file from './secret.json';

let dummy = {
  kind : "youtube#searchResult",
  etag : "SJZWTG6xR0eGuCOh2bX6w3s4F94/TXI6tD64kFxjA5SYNUeVfGjm3aQ",
  id : {
    videoId : "9CAz_vvsK9M",
    kind : "youtube#video"
  },
  snippet : {
   publishedAt : "2020-02-11T13:00:03.000Z",
   title : 'This is the title',
   description : 'This is the description of the video that describes the description and content of said video that you are watching or about to watch.',
   channelTitle: "Something@Vevo",
   thumbnails: {
      medium: {
        url: "https://i.ytimg.com/vi/9CAz_vvsK9M/mqdefault.jpg"
    }
   }
  }
}

const App = () => {
  const [ searchInput, setSearchInput ] = useState("");
  const [ queryResults , setQueryResults ] = useState([]);
  useEffect (() => {

      const fetchData = async _ => {
        try {
          
          // let res = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${file.api_key}&part=snippet&q=strokes`);
          // setQueryResults(res.data.items);
          // console.log(res.data.items)
          let res = [dummy]
          setQueryResults(res)
          console.log(res)
        } catch (err) {
          console.log(err)
        }

        finally {
         
        }
      }
      fetchData();
  },[])

  let videos = queryResults.map((video, i) => {
    let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
      <div key ={video.snippet.title-i}className={'vid-container'}>
        <h3>{video.snippet.title}</h3>
        <embed src={videoSrc} width="550px" height="400" scale="aspect" controller="true"/>
        <div>{new Date(video.snippet.publishedAt).toDateString()}<p>{video.snippet.description}</p></div>
      </div>
    )
  })
  return (
    <div className={'App'}>
      {videos.length ? videos: <div><h1> No Videos Found</h1> </div>}
    </div>
  )
}

export default App;



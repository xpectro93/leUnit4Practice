import React from 'react';
import { useParams } from 'react-router-dom';
import secret from '../secret.json'
const Video = props => {
  const { id } = useParams();
  let vidObj = secret.test_query.items.filter(vid => vid.id.videoId === id);
  let vod = (
        <div key ={vidObj[0].snippet.title}className={'vid-container'}>
           <h3>{vidObj[0].snippet.title}</h3>
           <embed 
            className={'video'} 
            src={`https://www.youtube.com/embed/${vidObj[0].id.videoId}`}  
            scale="aspect" 
            controller="true"
           />
           <div>{new Date(vidObj[0].snippet.publishedAt).toDateString()}<p>{vidObj[0].snippet.description}</p></div>
        </div>
          )

  return (
  <div>This is a video component {id}
  {vod}
  </div>
  )
}

export default Video;
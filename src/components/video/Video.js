import React from 'react';


const Video = ({video}) => (
  <div key ={video.snippet.title}className={'vid-container'}>
      <h3>{video.snippet.title}</h3>
      <embed 
        Secure
        SameSite="None"
        className={'video'} 
        src={`https://www.youtube.com/embed/${video.id.videoId}`}  
        scale="aspect" 
        controller="true"
      />
      <div>{new Date(video.snippet.publishedAt).toDateString()}<p>{video.snippet.description}</p></div>
 </div>)
  


export default Video;
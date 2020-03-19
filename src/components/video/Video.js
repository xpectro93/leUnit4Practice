import React from 'react';


const Video = ({video}) => {
  document.title = `Watching - ${video.snippet.title}`
  return (
  
  <div key ={video.snippet.title}className={'vid-container'}>
      <h3>{video.snippet.title}</h3>
      <embed 
        secure={"true"}
        samesite="None"
        className={'video'} 
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}  
        scale="aspect" 
        controller="true"

      />
      <div>{new Date(video.snippet.publishedAt).toDateString()}<p>{video.snippet.description}</p></div>
 </div>)}
  


export default Video;
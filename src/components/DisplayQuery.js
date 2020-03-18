import React from 'react';
import { useHistory } from 'react-router-dom';
const DisplayQuery = props => {
  const history = useHistory();

  const redirectToVid = id => history.push(`/video/${id}`)

  console.log(props.response)
  const videos = props.response.map( (video, i) => {
    const title = video.snippet.title;
    const src = video.snippet.thumbnails.medium.url;
    const vidId = video.id.videoId;
    return(
      <div className={'thumbnails'} 
           onClick={()=> redirectToVid(vidId)}
           key={title}>
      <img src={src} alt={title}/>
      <h5>{title}</h5>
      </div>
    )
  })
  return (
    <div className={'thumbnails-container'}>
      {videos.length ? videos : <div>Search For Some damn vids, fammm</div>}
    </div>
  )

}

export default DisplayQuery;
import React from 'react';
import secret from '../../secret.json';
import { useParams } from 'react-router-dom';


import Video from './Video';
import Comment from './Comment';


const VideoPage = props => {
  const { id } = useParams();
  let vidObj = secret.test_query.items.filter(vid => vid.id.videoId === id);

  return (
    <Video video={vidObj[0]}/>
  )

}
export default VideoPage
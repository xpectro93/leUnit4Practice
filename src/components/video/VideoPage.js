import React from 'react';
import secret from '../../secret.json';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Video from './Video';
import Comment from './Comment';


const VideoPage = props => {
  const { id } = useParams();
  const [ vidData, setVidData ] = React.useState([]);
  // let vidObj = secret.test_query.items.filter(vid => vid.id.videoId === id);
  React.useEffect(()=> {
    const fetchVideo = async _ => {
      let vid = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${secret.api_key}&part=snippet`);
      setVidData(vid.data.items)
        debugger
    }
    fetchVideo()
  },[id])
  return (
    vidData.length ? <Video video={vidData[0]}/> :<div>Something went horribly wrong, leave while you can</div>
      
  )

}
export default VideoPage
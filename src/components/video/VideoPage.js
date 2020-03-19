import React from 'react';
import secret from '../../secret.json';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Video from './Video';
import Comment from './Comment';


const VideoPage = _ => {
  const { id } = useParams();
  const [ vidData, setVidData ] = React.useState([]);
 

  React.useEffect(()=> {
    const fetchVideo = async _ => {

      try {
        let vid = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${secret.api_key}&part=snippet`);
      
        setVidData(vid.data.items);
        
      } catch( err ) {
        console.log ( err );
        
      }
  

    }
    fetchVideo()
  },[id])
  return (
   !vidData.length ? 
   <div>Something went horribly wrong, leave while you can</div> : <Video video={vidData[0]}/>
      
  )

}
export default VideoPage
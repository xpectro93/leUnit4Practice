import React from 'react';
import secret from '../../secret.json';
import { useParams } from 'react-router-dom';
import { useInput } from '../../utils/customHook.js'
import axios from 'axios';

import Video from './Video';
import Comment from './Comment';


const VideoPage = _ => {
  
  ///comments state
  const name = useInput('');
  const comment = useInput('');
  const [ userComments, setUserComments ] = React.useState([]);

  //video state
  const { id } = useParams();
  const [ vidData, setVidData ] = React.useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    let date =  new Date().toDateString()
    let newComment = { name : name.value, comment: comment.value, date: date };

    let newComments = [newComment, ...userComments];
    setUserComments(newComments);

  }

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
   <div>Something went horribly wrong, leave while you can</div> : 
   <div className={'video-page'}>

     <Video video={vidData[0]}/>
     {userComments.length ? 
       <div className={'comments'}> {userComments.map((comment, i ) => <Comment key={i} data={comment} />)}</div> :
       <div className={'comments'}> <h1>NO COMMENTS ADDED YET</h1></div>
     }
      <form onSubmit={handleSubmit}>
        <input {...name}  placeholder={'Enter your name'} required/>
        <input {...comment} placeholder={'Type Comment heerr'} required/>
        <button type={'submit'}>Submit</button>
      </form>
   </div>
   
      
  )

}
export default VideoPage
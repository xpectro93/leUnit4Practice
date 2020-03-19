import React, { useState } from 'react';
import { useInput } from '../utils/customHook.js';
import Comment from  './video/Comment.js'

const VideoForm = props => {
  const name = useInput("");
  const comment = useInput("");
  comments [ comments, setComments ] = useState([])
  const handleSubmit = e = > {
    e.preventDefault();
    let newComment = (
      <div>

      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} >
      <input {...name } required />
      <input {...comment } required />
      <button type={'submit'}>Submit</button>
    </form>
  )
};

export default VideoForm;
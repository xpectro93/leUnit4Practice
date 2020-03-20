import React from 'react';


const Comment  = ({ data }) => {
  return (
    <div className={"comment"}>
      <h3>{data.name}</h3>
  <p>{data.date} : {data.comment}</p>
    </div>
  )
}

export default Comment;
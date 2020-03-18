import React from 'react';


const Error = _ => {
  let errorLink = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
  return (
    <div className={'container'}>
      <embed className={'error-video'} src={errorLink}  scale="aspect" controller="true"/>
    </div>
  )
}
export default Error;
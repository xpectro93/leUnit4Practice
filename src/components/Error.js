import React from 'react';


const Error = _ => {
  const [ rgb, setRgb ] = React.useState([0,0,0]);
  const errorLink = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
  
  const random = max =>  Math.floor(Math.random() * Math.floor(max));

  React.useEffect(() => {
    const  tick = setInterval(() => {
      let [ r , g, b ] = rgb;
      r = random(256);
      g = random(256);
      b = random(256);
      setRgb([r,g,b])
      console.log(rgb)
    },100)
    return () => clearInterval(tick)
  })
   document.title = 'Getting Rolled'
  let [ r , g , b] = rgb;
  return (
    <div className={'container'}>
        
    <div style={{ background:`rgb(${r},${g},${b})`, width:'100%', height:'100vh'}}>
      <h1 style={{margin:'auto',width:'100%', height:'10vh'}}>!!!!CRITICAL ERROR!!!!</h1>
      <embed className={'error-video'} src={errorLink}  scale="aspect" controller="true"/>
      <h1 style={{margin:'auto',width:'100%', height:'10vh'}}>!!!!CRITICAL ERROR!!!!</h1>
    </div>
      
    </div>
  )
}
export default Error;
import React from 'react';
import './CSS/App.css';
import { Switch, Route } from 'react-router-dom'

//components
import Navbar from './Navbar.js';
import Home from './components/Home.js';
import VideoPage from './components/video/VideoPage.js';
import Error from './components/Error.js'
import About from './components/About.js'

const App = () => {


  return (
    <div className={'App'}>
      <Navbar/>
     <Switch>
        <Route exact path={"/"}>
            <Home/>
        </Route>
        <Route exact path={"/about"}>
          <About/>
        </Route>
        <Route path={"/video/:id"}>
          <VideoPage/>
        </Route>
          
        <Route path="*">
          <Error/>
        </Route>
    </Switch> 
  </div>)
}
export default App;




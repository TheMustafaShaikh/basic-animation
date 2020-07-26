import React from 'react';
import './App.css';
import cloud from "./images/cloud.png"
import Plane from "./plane"
import useWebAnimations from "@wellyshen/use-web-animations";



function App() {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: { 
      transform: ["translate(0,0)"],
      transform: ["translate(-1400px,0)"]
  
  },
    timing: { 
      duration: 3000,
      iterations: Infinity
   }
  });

  return (
    <div className="App">
      <div className="sky" ref={ref}>
          <img src={cloud} alt="Cloud image"/>
          <img src={cloud} alt="Cloud image"/>
      </div>

      <div>
        <button onClick={()=>{getAnimation().play()}}>start cloud</button>
        <button onClick={()=>{getAnimation().pause()}}>pause cloud</button>
      </div>

      <Plane />
    </div>
  );
}

export default App;

import React from 'react'
import plane from "./images/plane.png"
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';

export default function Plane() {
    const { ref,playState, getAnimation } = useWebAnimations({
        keyframes: [
            {transform:"translate(0,0)"},
            {transform:"translate(100px,-500px)"},
            {transform:"translate(800px,-500px)"},
            {transform:"translate(800px,-300px)"},
            {transform:"translate(800px,-200px)"},
            {transform:"translate(900px,-100px)"},
            {transform:"translate(1000px,-50px)"},
            {transform:"translate(1100px,-10px)"}

        ],
        timing: { 
          duration: 4000,
          iterations: Infinity,
          easing: 'ease-in-out'
       }
      });
    
    return (
        <div>
            <div className="plane-all" >
        <img ref={ref} src={plane} alt="plane" width={200} height={100}/>
      </div>
      <div>
        <button onClick={()=>{getAnimation().play()}}>start plane</button>
        <button onClick={()=>{getAnimation().pause()}}>pause plane</button>
      </div>
        </div>
    )
}

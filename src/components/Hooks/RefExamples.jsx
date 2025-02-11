
import React, { useEffect,useRef,} from 'react'
import { useState } from 'react';

import VIDEO from "./video123.mp4";


const RefExamples = () => {

    const [play, setplay] = useState(true);
    const eleRef = useRef();
    const videoRef = useRef();
    console.log(videoRef);
    useEffect(()=>{
        eleRef.current.style.color ="teal";
        eleRef.current.innerText = "React Ref"
    });
    let playORpause=()=>{
        if(play === true){
            videoRef.current.play();
            console.log(play);
            setplay(false);
        }else{
           videoRef.current.pause();
           console.log(play);
           setplay(true); 
        }
    }
    return (
        <div>
            <h1 ref={eleRef}>RefExamples</h1>
            <video src={VIDEO} ref={videoRef} onClick={playORpause}></video>
        </div>
      )
}
export default RefExamples;



  




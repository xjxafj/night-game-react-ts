import {FC,useState,useEffect} from 'react';
import useMouseMovePosition from '../hooks/mouseMovePosition';
const MouseTracker:FC=()=>{
    const position=useMouseMovePosition();
    
    return(
        <p>X:{position.x} Y:{position.y}</p>
    );
} 
export default MouseTracker
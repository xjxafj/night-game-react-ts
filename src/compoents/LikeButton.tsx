import {useState,FC,useEffect} from 'react';
import useMouseMovePosition from '../hooks/mouseMovePosition';
const LikeButton: FC = ()=>{
    const [obj,setObj]=useState({
        like: 0,
        on: true,
    })
    const position=useMouseMovePosition()
    useEffect(()=>{
        document.title=`点击了${obj.like}次`
    })
    function likeChange(){
        setObj({like:obj.like+1,on:obj.on});    
    }
    return (
        <>
            <p>X:{position.x} Y:{position.y}</p>
            <button onClick={likeChange}>{obj.like}</button>
       </>
    )
}
export default LikeButton;
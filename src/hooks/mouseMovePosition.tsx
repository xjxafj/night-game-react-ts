import {useState,useEffect} from 'react';
/**
 * 
 * 自定义hooks,函数必须以use开头
 * 
 * */
const useMouseMovePosition=()=>{
    const [position,setPosition]=useState({
        x:0,
        y:0,
    });
    function updateMousePosition(e:MouseEvent){
        setPosition({
            x:e.clientX,
            y:e.clientY,
        })
    }
    useEffect(()=>{
        console.log(`add useMouseMovePosition`)
        document.addEventListener('click',updateMousePosition)
        return ()=>{
            console.log(`remove useMouseMovePosition`)
            document.removeEventListener('click',updateMousePosition)
        }     
    },[position.x,position.y])
    return position
}
export default useMouseMovePosition
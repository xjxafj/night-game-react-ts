import { useState,useEffect, FC} from 'react'
import axios from 'axios'
import UseUrlLoder from '../hooks/useUrlLoder'
interface IImageLoaderProps
{
    url:string
}

let timer: any = null
const useImageLoader: FC<IImageLoaderProps> = (porps)=>{
    const [flash,setFlash] =useState(true)
    
    const [data,status]=UseUrlLoder(porps.url,[flash])
    function changeImage(){
        setFlash(!flash)
    }
    return (
        <>
            {status==='加载完成。'?<img src={data&&data.message} onClick={changeImage} width={200} height={200}></img>:<p>{status}</p>}
        </>
    )
}
useImageLoader.defaultProps={
    url:''
}
export default useImageLoader
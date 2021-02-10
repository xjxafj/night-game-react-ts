import React,{ useState,useEffect} from 'react';
import axios from 'axios';
const useUrlLoder=(url:string,deps: any[]=[])=>{
    const [data,setData]=useState<any>(null);
    const [status,setStatus]=useState("加载中...");
    useEffect(()=>{
        console.log('加载中...')
        setStatus("加载中...");
        axios.get(url).then(result=>{
            setData(result.data)
            setStatus("加载完成。")
            console.log('加载完成。')
        }).catch(mess=>{
            setStatus(`加载出错了:${mess}...`)
            //alert(mess)
        }
         
        )
        return ()=>{
           
        }
    },deps);
    return [data,status]
}
export default useUrlLoder

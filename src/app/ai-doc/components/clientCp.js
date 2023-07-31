'use client'
import { useEffect,useState } from "react"
import style from './clientCp.module.scss'
const  ClientCp = ()=>{
    const [count,setCount] = useState(0)
    console.time('加载时间')
    useEffect(()=>{
        console.timeEnd('加载时间')
    },[])

    const clickHandle = ()=>{
        setCount(count+1)
    }
    return <div className={style.button} onClick={clickHandle}>{count}</div>
}

export default ClientCp
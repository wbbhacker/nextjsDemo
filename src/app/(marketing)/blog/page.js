'use client'
// import Plotly from 'plotly.js';
import { useEffect } from 'react';

const Blog = () => {

  // const fetchData = async ()=>{
  //   const res = await fetch('blog/api')
  //   const data = await res.json()
  //   console.log(data)
  //   // Plotly.newPlot('chartContainer', data.data, data.layout);
  //   Plotly.react('chartContainer', data);
  // }

  useEffect(()=>{
    // fetchData()
  },[])

  return <div  style={{
    width:'800px',
    height:'600px'
  }} id="chartContainer">Blog</div>
}


export default Blog
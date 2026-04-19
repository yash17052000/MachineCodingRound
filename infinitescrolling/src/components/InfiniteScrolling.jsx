import React, { useEffect, useState } from 'react'
import Posts from './Posts'
import axios from 'axios'

function InfiniteScrolling() {
    const [data,setData]=useState([])
    const [pageNo,setPageNo]=useState(1)
    useEffect(()=>{
    
    axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`).then((data)=>setData((prev)=>[...prev,...data.data]))
    },[pageNo])
  return (
    <div className='container'>
    <Posts data={data} setPageNo={setPageNo}/>
    </div>
  )
}

export default InfiniteScrolling

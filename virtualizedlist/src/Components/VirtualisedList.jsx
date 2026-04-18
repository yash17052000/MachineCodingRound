import React, { useState } from 'react'

function VirtualisedList({list,itemheight, height, width}) {
    
    const [indices,setIndices]=useState([0,Math.floor(height/itemheight)]);
    const visibleList=list.slice(indices[0],indices[1]+1);
    const handlescroll=(e)=>{
        const {scrollTop}=e.target
        console.log("scroo",scrollTop);
        const newStartIndex=Math.floor(scrollTop/itemheight);
        const endIndex=newStartIndex+Math.floor(height/itemheight);
        setIndices([newStartIndex,endIndex])
        
    }
  return (
    <div className='container' style={{height,width,backgroundColor:"gray",overflow:"auto"}}
    onScroll={handlescroll}>
    <div style={{height:list.length*itemheight,position:"relative"}}>
      {
        visibleList.map((item,index)=><div style={{
            height:itemheight,
            backgroundColor:"orange",
            border:"5px solid grey",
            top:(indices[0]+index)*itemheight,
            position:"absolute",
            width:"100%",
            textAlign:"center"
        }}>Item {item}</div>)
      }
      </div>
    </div>
  )
}

export default VirtualisedList

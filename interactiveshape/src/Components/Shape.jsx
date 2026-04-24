import React, { useEffect, useRef, useState } from 'react'

function Shape({ count }) {
    const [grid, setGrid] = useState(Array.from({ length: count }).fill(false));
    let ref = useRef([])
    const queue = useRef([])
    console.log("que",queue.current);
    
    const handleClick = (index, flag) => {
        if(ref.current.length>0 && flag) return ;
        if (grid[index]) {
    return;
}
        setGrid((prev) => {
            const newGrid = [...prev];
            newGrid[index] = flag;

            if (flag) queue.current.push(index);
            return newGrid;
        });
    };
    const handleReverse = (ind) => {

console.log("in",ind);

        setGrid((prev) => {
            const newGrid = [...prev];
            newGrid[ind] = newGrid[ind] ? false : false;
            return newGrid
        })

    }
    useEffect(() => {

        if (queue.current.length === grid.length) {


      
            queue.current.map((ind,t) =>
                 ref.current[t]=setTimeout(() => {
                    handleReverse(ind)
                    if(ref.current.length===grid.length-1)
                        ref.current=[]

                 }, 1000*(t+1))
            )
            queue.current=[]

        }
        
    }, [grid])
    useEffect(()=>{
     ref.current.map((t)=>clearTimeout(t))
    },[])
    return (
        <div className='container'>
            {grid.map((flag, index) => (
                <div className='subcontainer' key={index} style={{
                    backgroundColor: flag ? "red" : ""
                }} onClick={() => {
                    handleClick(index, true)
                }} ></div>
            ))}
        </div>
    )
}

export default Shape

import React, { useEffect, useState } from 'react'

function ReactProgressbar() {
    const [bar, setBar] = useState(0)
    const [show, setShow] = useState(false)
    useEffect(() => {
       
        let timeofinterval = setInterval(() => {
            setBar((prev) => {
                if (prev >= 100) {
                    clearInterval(timeofinterval)
                    return prev;
                }
                return prev + 5
            })
        }, 150)
         
    
       
return ()=>{
            clearInterval(timeofinterval)
        }
    }, [show])
    return (
        <>
        {show&&<div className='container'>
            <div className='progress' style={{
                transform: `translateX(${bar - 100}%)`
            }}>

            </div>

        </div>}
        <button onClick={()=>{setShow(!show)
        setBar(0)}}>
        Togggle
      </button>
        </>
    )
}

export default ReactProgressbar

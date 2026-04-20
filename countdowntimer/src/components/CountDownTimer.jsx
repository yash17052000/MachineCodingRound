import React, { useEffect, useRef, useState } from 'react'

function CountDownTimer() {
    let [clock, setClock] = useState({
        hour: 0,
        minute: 0,
        second: 0
    })
    let timref=useRef(null)
    console.log("second", clock);

    const handleRun = () => {
        let updateClock = { ...clock }

        setClock((prev) => {
            let newSecond = prev.second - 1;
            let newMin = prev.minute
            let hour = prev.hour
            if (newSecond < 0) {
                newSecond = 59;
                newMin = newMin - 1;
                if (newMin < 0) {
                    hour = hour - 1
                    if(hour<0) hour=0
                }
                newMin=59
            }

            return {
                ...prev,
                second: newSecond,
                hour: hour,
                minute: newMin
            };
        });
    }
    const handleClear=()=>{
    clearInterval(timref.current)
    delete timref.current
    setClock({
     minute:"00",
     second:"00",
     hour:"00"

    })
    }
    
    const [start, setStart] = useState(false)
    useEffect(() => {
        if (start) {
            timref.current=setInterval(handleRun, 1000)
        }
        
        return ()=> clearInterval(timref.current)
    }, [start])

    const handleClock = (key, value) => {
        let updatedClock = { ...clock }
        if (key === "second") {
            updatedClock = {
                ...updatedClock,
                second: value % 60,
                minute: Math.floor(value / 60)
            }

        }
        if (key === "minute") {
            updatedClock = {
                ...updatedClock,
                minute: value % 60,
                hour: Math.floor(value / 60)
            }

        }
        if (key === "hour") {
            updatedClock = {
                ...updatedClock,
                hour: value % 24
            }

        }
        setClock(updatedClock)
    }
    return (
        <div className='container'>
            <div>CountDown Timer</div>
            <div className='subcontainer'>
                <input type='number' className='clockcontainer' value={clock.hour ?? "0"} onChange={(e) => handleClock("hour", e.target.value)} />:
                <input type='number' className='clockcontainer' value={clock.minute ?? "0"} onChange={(e) => handleClock("minute", e.target.value)} />:
                <input type='number' className='clockcontainer' value={clock.second ?? "0"} onChange={(e) => handleClock("second", e.target.value)} />
            </div>
            <div>
                <button onClick={() => setStart(!start)}>{start ? "Pause" : "start"}  </button>
                <button onClick={handleClear}> Reset</button>
            </div>
        </div>
    )
}

export default CountDownTimer

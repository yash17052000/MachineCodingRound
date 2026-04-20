import React, { useRef, useState } from 'react'

function Toast() {
    const [message, setMessage] = useState([])
    const timeRef = useRef({})
    
    const handleClose = (id) => {
    clearTimeout(timeRef.current[id])
    delete timeRef.current[id]

    setMessage((prev) => prev.filter((m) => m.id !== id))
}
    const handleShow = (data, color) => {

        const id = new Date().getTime()
        setMessage((prev) => [...prev, { data, id, color }])
        timeRef.current[id] = setTimeout(() => {
            handleClose(id)
        }, 5000)
    }
    

    return (
        <div>
           {message.map((m) => {
    return m.data && (
        <div key={m.id} className='container' style={{
            backgroundColor:m.color
        }}>
            <div className='message'>{m.data}</div>
            <div className='cross' onClick={() => handleClose(m.id)}>X</div>
        </div>
    )
})}

            <button onClick={() => handleShow("success", "green")}>Success</button>
            <button onClick={() => handleShow("warning", "yellow")}>Warning</button>
            <button onClick={() => handleShow("Info", "blue")}>Info</button>
        </div>
    )
}

export default Toast

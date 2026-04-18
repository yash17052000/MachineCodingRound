import { useEffect, useRef, useState } from "react"
import "./style.css"
export const ToastContainer = () => {
    const [listoFToasts, setListOfToasts] = useState<any[]>([])
    const timeref=useRef<any>({})
    const handleCLose = (id: number) => {
        clearTimeout(timeref.current[id])
        delete timeref.current[id]
        setListOfToasts((prev) => {
            return prev.filter((toast) => toast.id !== id)
        })
    }
    const handleOpen = (type: string, message: string, color: string) => {
        const id = new Date().getTime()
        setListOfToasts([...listoFToasts, { type: type, message: message, color: color, id: id }])
        timeref.current[id] = setTimeout(() => {
            handleCLose(id)
        }, 5000)
    }
    return (
        <div className="container">
            <div className="toast-container">
                {listoFToasts.map((toast) => {
                    return <div className={`toast${toast.type}`} style={{ backgroundColor: toast.color }} key={toast.id}>
                        {toast.message} <span onClick={() => {
                            handleCLose(toast.id)

                        }}>X</span>
                    </div>
                })}
            </div>
            <div className="btn-container">
                <button onClick={() => handleOpen("Success", "Success Toast", "green")} >
                    Success Toast
                </button>
                <button onClick={() => handleOpen("Warning", "Warning Toast", "yellow")} >
                    Warning Toast
                </button>
                <button onClick={() => handleOpen("Info", "Info Toast", "blue")} >
                    Info Toast
                </button>
                <button onClick={() => handleOpen("Error", "Error Toast", "red")} >
                    Error Toast
                </button>
            </div>

        </div>
    )
}
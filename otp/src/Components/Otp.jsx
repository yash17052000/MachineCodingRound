import { useEffect, useRef, useState } from "react"
import "./Otp.css"
export const Otp = ({ otplength = 6 }) => {
    const [otpFields, setOtpFields] = useState(new Array(otplength).fill(""))
    const ref = useRef([])
    const handleChange = (e, ind) => {
        let fields = [...otpFields]
        if (e.code === "ArrowRight" || e.code.includes("Digit")) {
            if (ind < otplength - 1)
            ref.current[ind + 1].focus()
            if (isNaN(e.key)) return;
            fields[ind] = e.key
        }
        else {
            if (e.code === "Backspace") {
                fields[ind] = ""
            }
            if (ind > 0)
                ref.current[ind - 1].focus();
        }
        setOtpFields(fields)
    }

    useEffect(() => {
        ref.current[0].focus()
    }, [])
    
    return (
        <div className="container">
            {otpFields.map((otp, ind) => {
                return (
                    <input type="tel" value={otp} name={otp} className="otpfields"
                    ref={(ele) => ref.current[ind] = ele}
                    onKeyDown={(e) => handleChange(e, ind)} maxLength={1} 
                    />)
            })}

        </div>
    )
}
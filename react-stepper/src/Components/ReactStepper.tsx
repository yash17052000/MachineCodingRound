import React, { useState } from 'react'
import "./style.css"
const ReactStepper = ({ steps }: any) => {
    const [stepNo, setStepNo] = useState(0)
    console.log("steps", stepNo);

    return (
        <div className='stepper'>
            <div >
                {
                    steps.map((step: any, index: number) => {

                        return (
                            <><div className='stepper-container'>
                                <div className={`stepper-number ${stepNo<index ? "active" : ""}`} onClick={() => setStepNo(index)}>
                                    
                                        {index + 1}
                                    
                                    {index < steps.length - 1 && <div className={`stepper-line ${stepNo<index+1 ? "active" : ""}`}></div>}
                                </div>
                                {<div className="stepper-label">
                                    {step.label}
                                </div>

                                }

                                {stepNo === index && <div className='stepper-content'>
                                    {step.content}
                                </div>

                                }
                            </div></>)
                    })
                }
            </div>
            <div >
                {stepNo > 0 && <button onClick={() => {
                    if (stepNo > 0) {
                        setStepNo((prev: any) => prev - 1)
                    }
                }} className='btn'>
                    Back
                </button>}
                {stepNo < steps.length - 1 && <button className="btn" onClick={() => {
                    if (stepNo < steps.length - 1) {
                        setStepNo((prev: any) => prev + 1)
                    }
                }}>
                    Next
                </button>
                }
            </div>
        </div>
    )
}

export default ReactStepper

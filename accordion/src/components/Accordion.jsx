import React, { useState } from 'react'

function Accordion() {

    const list = [{
        q: "what is  frontend",
        a: "frontend  is"
    }, {
        q: "what is  frontend",
        a: "frontend  is"
    }]
   
    
    const [accordionList, setAccordionList] = useState({})
    const handleAdd = (ind) => {
        console.log("ind",ind);
        const updatedObject={...accordionList}
        updatedObject[ind]=!updatedObject[ind]
        setAccordionList(updatedObject)
    }
    console.log("accodion",accordionList);
    
    return (
        <div >
            {
                list.map((l, ind) => (

                    <div>{(!accordionList[ind] ) ? 
                    <>
                    <div className='container'>
                    <div>{l.q}</div>
                    <div onClick={() => handleAdd(ind)}
                    style={{cursor:"pointer"}}>+</div>
                    </div>
                    </> :
                        <div className='maincontainer'>
                            <div style={{
                                display:"flex",
                                justifyContent:"space-between"
                            }}>
                                <div>{l.q} </div>
                                <div onClick={() => handleAdd(ind)}
                                style={{cursor:"pointer",
                                fontSize:"40px"
                                }}>{accordionList[ind]?"-":"+"}
                                    
                                </div>
                               
                            </div>
                            <div>
                                {l.a}
                            </div>
                        </div>
                    }
                    </div>


                ))
            }
        </div>
    )
}

export default Accordion

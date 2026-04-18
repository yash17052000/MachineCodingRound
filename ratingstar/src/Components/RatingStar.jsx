import React, { useRef, useState } from 'react'

function RatingStar() {
    const starList = (Array.from({ length: 7 }))
    const [hover, setHover] = useState(-1)
    const click = useRef(-1)
    const handlehover = (hoverIndex) => {
        setHover(hoverIndex)
    }

    return (
        <div className='container'>
            {starList.map((_, index) =>
                <span style={{
                    backgroundColor: (index <= hover || (index <= click.current && hover === -1)) ? "yellow" : "black",

                }}
                    onMouseEnter={() => handlehover(index)}

                    onMouseLeave={() => {


                        setHover(-1)
                    }}
                    onClick={() => {
                        setHover(-1)
                        click.current = index

                    }}>   &#9733;</span>
            )}

        </div>
    )
}

export default RatingStar

import React, { useEffect, useRef, useState } from 'react'
import data from "./data.json"

const ImageCarousel = () => {
    console.log("json", data);
    const [currentPage, setCurrentPage] = useState(0)
    console.log("outside func", currentPage);
    let intervalId = useRef(null)
    const handleNext = () => {
        console.log("indise func", currentPage);
        setCurrentPage((prev) => (prev + 1) % data.length);

    }
    const handleBack = () => {


        if (currentPage == 0) setCurrentPage(data.length - 1)
        else
            setCurrentPage((prev) => prev - 1)

    }
    useEffect(() => {
        intervalId.current = setInterval(handleNext, 1000)
        return () => {
            clearInterval(intervalId.current)// to rpeserve memory leak
        }
    }, [])

    return (
        <div className='container'>
            <div className='rightbtn' onClick={handleNext}>{">"}</div>
            <img src={data[currentPage].download_url} alt='' onMouseEnter={() => clearInterval(intervalId.current)}
                onMouseLeave={() => intervalId.current = setInterval(handleNext, 1000)}
            />
            <div className='leftbtn' onClick={handleBack}>{"<"}</div>
        </div>
    )
}

export default ImageCarousel

import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

function Carousel() {
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)
    const url = "https://picsum.photos/v2/list?page=2&limit=10";
    const ref = useRef(null)
    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setImages(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleNext = () => {
       
        setCurrentPage((prev) => (prev + 1) % images.length)
    }
    const handleBack = () => {
    setCurrentPage((prev) => (prev - 1 + images.length) % images.length)
}
    useEffect(() => {
        if(images.length>0){
        ref.current = setInterval(handleNext, 1000)
        return () => {
            clearInterval(ref.current)
        }
    }
    }, [images])
    console.log("cyr", currentPage,images);

    return (
        <div className='container'>
            <div className='leftarrow' onClick={handleBack}>{"<"}</div>
            <img src={images[currentPage]?.download_url} alt='none' onMouseEnter={() => {
                clearInterval(ref.current)
            }} onMouseLeave={()=>setInterval(handleNext, 1000)} />

            <div className='rightarrow' onClick={handleNext}>{">"}</div>
        </div>
    )
}

export default Carousel

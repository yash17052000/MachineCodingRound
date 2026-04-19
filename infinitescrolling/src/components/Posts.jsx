import React, { useEffect } from 'react'

function Posts({ data, setPageNo }) {
    useEffect(() => {
        const observer = new IntersectionObserver((param) => {
            {
                console.log("para", param);
                if (param?.[0].isIntersecting) {
                    observer.unobserve(lastImage)
                    setPageNo((prev) => prev + 1)
                }
            }
            
        },{threshold:0.5})
        const lastImage = document.querySelector(".image-post:last-child")

        if (!lastImage) return
        observer.observe(lastImage)
   return ()=>{
    if(lastImage) observer.unobserve(lastImage)
        observer.disconnect()
   }
    }, [data])
    return (
        <div className='container'>
            {
                data?.map((data, i) => <img className="image-post" src={data.download_url} alt="none" key={i} />)
            }
        </div>
    )
}

export default Posts

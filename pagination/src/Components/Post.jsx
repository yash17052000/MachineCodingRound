import axios from "axios";
import Pagination from "./Pagination.jsx";
import { useEffect, useState } from "react";

const Post = () => {
    const [images, setImages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const fetchImages = async () => {
        const ImageList = await axios.get(`https://picsum.photos/v2/list?page=${currentPage}&limit=5`).then((image) => {
            setImages(image.data)
        }).catch((err) => console.log(err));

    }
    useEffect(() => {
        fetchImages()
    }, [currentPage])
    console.log("images", images);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>

            <div className="post-container">

                {images.map((data) =>
                    <img src={data.download_url} key={data.id} />
                )}


            </div>
            <div>
                <Pagination totalPages={7} setCurrentPage={setCurrentPage} arr={new Array(3)}  currentPage={currentPage}/>

                Page Number-{currentPage}
            </div>
        </div>
    )
}

export default Post;
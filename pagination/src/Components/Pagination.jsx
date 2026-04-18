import { useEffect, useState } from "react"


const Pagination = ({ totalPages, setCurrentPage, arr, currentPage }) => {
    const handleNext = () => {
        setCurrentPage((prev)=>prev+1)
    }
    const handlePrev = () => {
        setCurrentPage((prev)=>prev-1<1?1:prev-1)
    }
    const [paginatedlist, setPaginatedlist] = useState([])
    useEffect(() => {
       let startPage=Math.max(currentPage-3,1);
       let endPage=currentPage+2
       let upaginatedlist=[]
      for(let i=startPage-1;i<=endPage;i++){
         upaginatedlist.push(i);
      }
        setPaginatedlist(upaginatedlist)
    }, [currentPage])
    return (
        <div className="pagination">
            <button className="btn" onClick={handlePrev} >
                {"<"}
            </button>
            {
                paginatedlist.map((ind, index) => <button onClick={() => setCurrentPage(ind + 1)}
                    className="btn"
                ><div className={ind+1===currentPage?"active":""}>{ind + 1}</div> </button>)
            }
            <button className="btn" onClick={handleNext}>
                {">"}
            </button>

        </div>
    )
}
export default Pagination
import axios from "axios";
import { useEffect, useRef, useState } from "react"

const SearchBar = () => {
    const [searchText, setSearchText] = useState("")
    const [result, setResult] = useState([])
    const [status, setStatus] = useState("loading")
    const abortController=new AbortController()
    let {signal}=abortController
    const cache=useRef({})
    const searchProduct = () => {
        
        setStatus("loading")
        const url = `https://dummyjson.com/products/search?q=${searchText}`
        const data = axios.get(url,{signal}).then((data) => {
            cache.current[searchText]=data.data.products
            setResult(data.data.products)
            setStatus("success")
        })
            .catch(
                (e) => {  if (e.name !== "AbortError") {
                    setStatus("error");
                } });


        return data;
    }
    useEffect(() => {
        if(searchText in cache.current){
             setResult(cache.current[searchText])
             setStatus("success")
             return ;
        }
        let timeId=setTimeout(searchProduct,1000)

        return ()=>{
            clearTimeout(timeId)
            abortController.abort()
        }

    }, [searchText])
    return (
        <div>
            <input type="text" value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }} />
            {
                status === "loading" && <>...loading</>
            }
            {
                status === "success" && <ul>
                    {
                        result.length > 0 ?
                            result.map((data) => <li>{data.title}</li>) : "No data Found"
                    }
                </ul>

            }
             {
                status === "error" && <>error is there</>

            }

        </div>
    )
}
export default SearchBar
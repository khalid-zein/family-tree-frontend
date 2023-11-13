import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(url)
        .then((res) => {
            if (res.status === 200) {
                const items = res.data
                setData(items)
                setLoading(false)
                setError(false)
            } else {
               console.error('Request made was a bad request. Check again!') 
            }
        })
        .catch((err) => {
            console.log(err)
            setError(true)
            setLoading(false)
        })
    }, [url])

    return ( {data, loading, error, setData} );
}
 
export default UseFetch;
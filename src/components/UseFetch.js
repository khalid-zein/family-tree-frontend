import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = (apiUrl) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            // const allMembers = data.data
            console.log(data)
            setData(data)
            setLoading(false)
            setError(false)
        }) 
        .catch((err) => {
            console.log(err)
            setError(true)
            setLoading(false)
        })
    }, [apiUrl])

    return ( {data, loading, error, setData} );
}
 
export default UseFetch;
import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    const getData = () => {
        fetch(url).then(res => {
            return res.json()
        }).then(data => {
            setData(data);
            setLoading(false)
        }).catch(error => console.log(error))
    }
    useEffect(() => {
        getData();
    }, [url]);
    return {loading, data};
}
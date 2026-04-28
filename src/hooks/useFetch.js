import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=> {
        if(!url){
            setLoading(false)
            return
        }
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false)
        }).catch(e => (setError(e.message)))
    },[url])

    return {data, loading, error}
}

export default useFetch
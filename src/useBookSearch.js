import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function useBookSearch(query, pageNumber) {

    const [loading, setloading] = useState(true)
    const [errors, seterrors] = useState(false)
    const [books, setbooks] = useState([])
    const [hasMore, sethasMore] = useState(false)

    useEffect(() => {
        setbooks([])
    }, [query])

    useEffect(() => {
        setloading(true)
        seterrors(false)
        let cancel
        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setbooks(prevBooks => {
                return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])]
            })
            sethasMore(res.data.length > 0);
            setloading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            seterrors(true);
        })
        return () => cancel()
    }, [query, pageNumber])


    return { loading, errors, books, hasMore }
}

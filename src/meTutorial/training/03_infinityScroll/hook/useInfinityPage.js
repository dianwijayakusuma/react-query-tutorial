import React from 'react';
import { queryCache, useInfiniteQuery } from 'react-query';

function FetchPage(_, numbPage) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_start=${numbPage}&_limit=10`)
        .then(res => res.json())
        .then(data => {
            return data;
        })
}

function useInfinityPage(key) {
    return useInfiniteQuery(key, FetchPage, {
        refetchOnWindowFocus : false,
        getFetchMore : (data, allData) => {
            // queryCache.setQueryData(key, old => {
            //     console.log(data);
            //     // [...old, data]
            // })
        }
    })
}

export default useInfinityPage;
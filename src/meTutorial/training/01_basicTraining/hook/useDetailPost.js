import React from 'react';
import {useQuery, queryCache} from 'react-query';
import axios from 'axios';

function FetchDetailPost(_, id) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
        return res.data;
    })
}

function useDetailPost(key, id) {
    return useQuery([key, id], FetchDetailPost, {
        refetchOnWindowFocus : false,
        initialData : (data) => {
            return queryCache.getQueryData('data').find(item => item.id === id);
        },
        initialStale : true
    })
}

export default useDetailPost;
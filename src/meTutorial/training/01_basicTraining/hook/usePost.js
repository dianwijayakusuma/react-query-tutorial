import React from 'react';
import {queryCache, useQuery} from 'react-query';
import axios from 'axios';

async function fetchListData() {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data.data;
}

function usePost() {
    return useQuery('data', fetchListData, {
        // refetchOnWindowFocus : false,
        // refetchInterval : 1000
    })
}

export default usePost;
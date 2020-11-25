import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';

async function fetchListData() {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data.data;
}

function usePost() {
    return useQuery('data', fetchListData, {
        refetchOnWindowFocus : false
    })
}

export default usePost;
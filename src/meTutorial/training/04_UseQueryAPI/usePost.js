import React from 'react';
import {useQuery} from 'react-query';

 function GetDataPost() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
                .then(data => data.json())
                .then(response => {
                    return response;
                })
}

function usePost(key) {
    return useQuery(key, GetDataPost, {
        refetchOnWindowFocus : false,
    })
}

export default usePost;
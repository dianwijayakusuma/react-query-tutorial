import {queryCache, useQuery} from 'react-query';

function GetDetailPost(key, id){
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(data => data.json())
                .then(res => {
                    return res;
                })
}

function usePostDetail(key, id) {
    return useQuery([key, id], GetDetailPost, {
        refetchOnWindowFocus : false,
        retry : 1,
        enabled : id,
    })
}

export default usePostDetail;
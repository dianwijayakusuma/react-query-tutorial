import {queryCache, useQuery} from 'react-query';

function GetDetailPost(key, id){
    return fetch(`https://jsonplaceholder.typicode.com/posts/131`)
            .then(data => data.json())
            .then(res => {    
                if (res.id === undefined) throw new Error();
                else return res;
            })
}

function usePostDetail(key, id) {
    return useQuery([key, id], GetDetailPost, {
        refetchOnWindowFocus : false,
        enabled : id
    })
}

export default usePostDetail;

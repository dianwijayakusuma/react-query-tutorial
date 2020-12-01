import {useQuery} from 'react-query';

function FetchDetailFilm(_, idFilm) {
    return fetch(`http://www.omdbapi.com/?apikey=d5e8bde&i=${idFilm}`)
                .then(data => data.json())
                .then(res => {
                    return res;
                })
}

function useDetailFilm(key, id) {
    return useQuery([key, id], FetchDetailFilm, {
        refetchOnWindowFocus : false
    })
}

export default useDetailFilm;
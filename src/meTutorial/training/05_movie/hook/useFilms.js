import {queryCache, useQuery} from 'react-query';

function fetchData(_, titleMovie){
    return fetch(`http://www.omdbapi.com/?apikey=d5e8bde&${titleMovie == null ? false : `s=${titleMovie}`}`)
                .then(data => data.json())
                .then(res => {
                    if(res.Response === 'False') throw new Error();
                    else return res;
                })
                .catch(err => 'Film not found')
}

function useFilms(key, titleMovie) {
    return useQuery([key, titleMovie], fetchData, {
        refetchOnWindowFocus : false,
        initialData : (data) => {
            console.log(queryCache.setQueryData('searchFilm', 'naruto'));
            console.log(queryCache.getQuery(['searchFilm']));
        },
        onSuccess : (data) => {
            // console.log(queryCache.getQueryData(['defaultFilm', titleMovie]));
        }
    })
}

export default useFilms;
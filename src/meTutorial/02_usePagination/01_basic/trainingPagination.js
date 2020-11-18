import React, { Fragment, useState } from 'react';
import {queryCache, usePaginatedQuery} from 'react-query';
import axios from 'axios';

async function fetchPlanet(key, numPage) {
    const data = await axios.get(`http://www.omdbapi.com/?apikey=34a2066e&s=superman&page=${numPage}`);
    return data.data;
}

function TrainingPagination() {
    const [numPage, setNumPage] = useState(1);
    const {resolvedData, latestData, isInitialData} = usePaginatedQuery(['postData', numPage],fetchPlanet, {
        refetchOnWindowFocus : false,
    });

    return(
        <Fragment>
            {isInitialData ? 
                <h4>Memuat data..</h4> : 
                <>
                    <button 
                        onClick={() => {
                            setNumPage(old => Math.max(old-1, 1));
                        }}
                        disabled = {numPage == 1}
                        style={{opacity : numPage == 1 && .5}}
                    >Prev</button>
                    <p>Page {numPage}</p>
                    <button 
                        onClick={() => {
                            setNumPage(old => (old === latestData.totalResults / 10) ? old : old+1);
                        }}
                        disabled = {numPage === latestData.totalResults / 10}
                        style={{opacity : numPage === latestData.totalResults / 10 && .5}}
                    >Next</button>
                    {resolvedData.Search.map((item, index) => {
                        return <p key={index}>{item.Title}</p>
                    })}
                </>
            }

        </Fragment>
    )
}

export default TrainingPagination;
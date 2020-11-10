import React, { useState } from 'react';
import {usePaginatedQuery, useQuery} from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (key, page) => {
    console.log(page)
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
}

const Planets = () => {
    const [pages, setPages] = useState(1);
    const {resolvedData, latestData, status} = usePaginatedQuery(['PlanetsAPI', pages], fetchPlanets);

    return (
        <div>            
            <h2>Planets</h2>
            <button 
                onClick={() => setPages(old => old == 1 ? old : old-1)}
                disabled = {pages == 1 && true}
            >Back</button>
            <span>{pages}</span>
            <button
                onClick={() => setPages(old => latestData.next == null ? old : old+1 )}
            >Next</button>
            {console.log(resolvedData)}
            
            {status == 'loading' && <p>Loading...</p>}
            {status == 'error' && <p>Error!</p>}
            {status == 'success' && (
                <div>
                    {resolvedData.results.map((item, index) => {
                        return <Planet planets={item} key={item.name} />
                    })}
                </div>
            )}

        </div>
    );
}
 
export default Planets;
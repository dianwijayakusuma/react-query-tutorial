import React, { useState } from 'react';
import {useQuery} from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (key, page) => {
    console.log(page)
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
}

const Planets = () => {
    const [pages, setPages] = useState(1);
    const {data, status, error} = useQuery(['PlanetsAPI', pages], fetchPlanets, {
    });

    return (
        <div>
            <button onClick={() => setPages(1)}>Page 1</button>
            <button onClick={() => setPages(2)}>Page 2</button>
            <button onClick={() => setPages(3)}>Page 3</button>
            
            <h2>Planets</h2>
            
            {status == 'loading' && <p>Loading...</p>}
            {status == 'error' && <p>Error!</p>}
            {status == 'success' && (
                <div>
                    {data.results.map((item, index) => {
                        return <Planet planets={item} key={item.name} />
                    })}
                </div>
            )}

        </div>
    );
}
 
export default Planets;
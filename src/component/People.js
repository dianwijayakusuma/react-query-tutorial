import React from 'react';
import {useQuery} from 'react-query';
import Person from './Person';

const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/people/');
    return res.json();
}

const Planets = () => {
    const {data, status, error} = useQuery('PeopleAPI', fetchPlanets);

    return (
        <div>
            {console.log(data)}
            <h2>People</h2>
            
            {status == 'loading' && <p>Loading...</p>}
            {status == 'error' && <p>Error!</p>}
            {status == 'success' && (
                <div>
                    {data.results.map((item, index) => {
                        return <Person key={index} person={item} />
                    })}
                </div>
            )}

        </div>
    );
}
 
export default Planets;
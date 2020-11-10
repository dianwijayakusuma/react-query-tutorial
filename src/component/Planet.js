import React from 'react';

function Planet({planets}) {
    return(
        <>
            <div className='card'>
                <h3>{planets.name}</h3>
                <p>Population - {planets.population}</p>
                <p>Terrain - {planets.terrain}</p>
            </div>
        </>
    )
}

export default Planet;
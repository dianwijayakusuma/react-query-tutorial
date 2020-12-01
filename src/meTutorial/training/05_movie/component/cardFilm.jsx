import React, { Fragment } from 'react';

function Card_Film({film}) {
    const data = film.Search;

    return(
        <Fragment>
            {data.map(item => (
                <div className='card' key={item.imdbID} style={{width:'50%', margin : 'auto', marginTop:'20px'}}>
                    <img src={item.Poster} alt={item.Title}/>
                    <h2>{item.Title}</h2>
                </div>
            ))}
        </Fragment>
    )
}

export default Card_Film;
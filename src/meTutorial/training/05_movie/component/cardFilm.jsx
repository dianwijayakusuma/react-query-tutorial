import React, { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function Card_Film({film}) {
    const data = film.Search;
    const pageHistory = useHistory();
    const location = useLocation();

    const handlePage = (e) => {
        const id = e.target.dataset.key;
        pageHistory.push(`/film/${id}`);
    }

    return(
        <Fragment>
            {data.map(item => (
                <div className='card' key={item.imdbID} data-key={item.imdbID} style={{width:'50%', margin : 'auto', marginTop:'20px'}} onClick={handlePage}>
                    <img src={item.Poster} alt={item.Title} data-key={item.imdbID}/>
                    <h2 data-key={item.imdbID}>{item.Title}</h2>
                </div>
            ))}
        </Fragment>
    )
}

export default Card_Film;
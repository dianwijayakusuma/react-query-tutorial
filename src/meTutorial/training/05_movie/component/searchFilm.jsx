import React, { Fragment } from 'react';
import Card_Film from './cardFilm';

function Search_Film({film}) {
    return(
        <Fragment>
            <h1>Result</h1>
            <Card_Film film={film} />
        </Fragment>
    )
}

export default Search_Film;
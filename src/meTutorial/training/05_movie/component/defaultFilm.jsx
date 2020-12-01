import React, { Fragment } from 'react';
import Card_Film from './cardFilm';

function Default_Film({film}) {
    return(
        <Fragment>
            <h1>Default Film</h1>
            <Card_Film film={film} />
        </Fragment>
    )
}

export default Default_Film;
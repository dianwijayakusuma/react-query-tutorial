import React, { Fragment } from 'react';
import useFilms from '../hook/useFilms';
import Card_Film from './cardFilm';
import Load from './loader';

function Default_Film() {
    const {data:dataDefaultFilm, isLoading:loadingDefaultFilm} = useFilms('defaultFilm', 'superman');

    return(
        <Fragment>
            {loadingDefaultFilm ? null : 
                <>
                    <h1>Default Film</h1>
                    <Card_Film film={dataDefaultFilm} />
                </>
            }
        </Fragment>
    )
}

export default Default_Film;
import React, { Fragment, useState } from 'react';
import {useForm} from 'react-hook-form';
import useFilms from '../hook/useFilms';
import  Load  from '../component/loader';
import Default_Film from '../component/defaultFilm';
import Search_Film from '../component/searchFilm';

function Film() {
    const [searchValue, setSearchValue] = useState(null);
    const {register, handleSubmit} = useForm();
    const {data:dataDefaultFilm, isLoading:loadingDefaultFilm} = useFilms('defaultFilm', 'superman');
    const {data:dataSearchFilm, isLoading:loadingSearchFilm} = useFilms('searchFilm', searchValue);
    const onSubmit = data => setSearchValue(data.data);

    if(loadingSearchFilm) return null;

    return(
        <Fragment>
            {loadingDefaultFilm ? 
                <Load/> : 
                <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" name='data' ref={register}/>
                        <button type='submit'>Cari Film</button>
                    </form>

                    {dataSearchFilm != 'Film not found' && <Search_Film film={dataSearchFilm} />}         

                    <Default_Film film={dataDefaultFilm} />
                </>
            }
        </Fragment>
    )
}

export default Film;
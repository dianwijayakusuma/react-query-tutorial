import React, { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useDetailFilm from '../hook/useDetailFilm';
import Load from '../component/loader';
import Default_Film from '../component/defaultFilm';

function DetailFilm({match}){
    const location = useLocation();
    const pageHistory = useHistory();
    const {data:dataDetailFilm, isLoading} = useDetailFilm('detailFilm', match.params.id);

    if(location.pathname !== match.url) pageHistory.replace('/error');
    if(isLoading) return null;

    return(
        <Fragment>
           <div className='card' style={{cursor : 'default'}}>
               <img src={dataDetailFilm.Poster} alt=""/>
               <h2>{dataDetailFilm.Title}</h2>
               <h2>{dataDetailFilm.Director}</h2>
               <h3>{dataDetailFilm.Genre}</h3>
               <h3>{dataDetailFilm.Language}</h3>
           </div>

           <Default_Film/>
        </Fragment>
    )
}

export default DetailFilm;
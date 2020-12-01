import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Film from '../page/film';
import Home from '../page/home';
import DetailFilm from '../page/detailFilm';
import Error_Page from '../page/error';

function RouteApp() {
    return(
        <BrowserRouter forceRefresh={true}>
            <NavLink to='/' exact activeStyle={{color : 'white'}}>HOME</NavLink>
            <NavLink to='/film' activeStyle={{color : 'white'}}>FILMS</NavLink>

            <Switch>
                <Route path='/' exact>
                    <Home/>                    
                </Route>
                <Route path='/film'>
                    <Film/>
                </Route>
                <Route strict path='/film/:id' render={({location}) => {
                    return <DetailFilm/>
                }} />

                <Route component={Error_Page} />
            </Switch>
        </BrowserRouter>
    )
}

export default RouteApp;
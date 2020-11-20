import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Trainings from './trainings';

function RouteApplication() {
    return(
        <BrowserRouter forceRefresh={true}>
            <NavLink to='/' exact style={{color : 'white'}}>Home</NavLink>
            <NavLink to='/data' style={{color : 'white'}}>Data</NavLink>

            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/data' component={Trainings} />
            </Switch>
        </BrowserRouter>
    )
}

function Home() {
    return <h1>Hello word</h1>
}

export default RouteApplication;
import React from 'react';
import PostList from './PostList';
import PostDetail from './PostDetail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function ApplicationUseQueryAPI() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={PostList} />
                <Route path='/detailpost/:id' component={PostDetail} />
            </Switch>
        </BrowserRouter>
    )
}

export default ApplicationUseQueryAPI;
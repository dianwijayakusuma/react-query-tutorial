import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import DetailPost from './detailPost';
import PostList from './PostList';

function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={PostList} />
                <Route path='/post/:id' exact component={DetailPost} />
                <Redirect to='/' />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
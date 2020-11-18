import React, { Fragment } from 'react';
import {useQuery, queryCache} from 'react-query';
import { BrowserRouter, NavLink, Route, Switch, useParams } from 'react-router-dom';
import axios from 'axios';

function AppTraining() {
    const postQuery = useQuery('posts', fetchPost, {
        refetchOnWindowFocus : false
    })

    if(postQuery.status === 'loading') return <h4>Memuat...</h4>

    return(
        <BrowserRouter>
            {postQuery.data.map(item => {
                return <div key={item.id} style={{width : '50%', boxShadow:'2px 2px 2px #333', float:'left'}}>
                    <NavLink  to={`/detailpost/${item.id}`}>{item.title}</NavLink>
                    <p style={{opacity:.6}}>{partText(item)}</p>
                </div>
            })}

            <Switch>
                <Route exact path='/detailpost/:id' component={DetailPost} />
            </Switch>
        </BrowserRouter>
    )
}

function DetailPost(){
    const params = useParams();
    const postQueryDetail = useQuery(['postDetail', params.id], fetchDetailPost, {
        initialData : () => {
            return queryCache.getQueryData('posts').find(item => item.id === parseInt(params.id));
        },
        initialStale : true
    })

    if(postQueryDetail.isInitialData) return <p>{partText(postQueryDetail.data)}</p>;

    return(
        <Fragment>
            <h1>Hello word</h1>
            <p>{postQueryDetail.data.body}</p>
        </Fragment>
    )
}
 
function partText(item){
    return item.body.substr(0, Math.floor(Math.random() * 30 + 10)).concat('...');
}

function fetchPost() {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data);
}

  function fetchDetailPost(key, id) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.data);
}

export default AppTraining;
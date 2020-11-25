import React, { Fragment } from 'react';
import { queryCache } from 'react-query';
import { BrowserRouter, NavLink, Route, Switch, useHistory, useParams } from 'react-router-dom';
import usePost from '../hook/usePost';
import useDetailPost from '../hook/useDetailPost';

function AppTraining1() {
    return(
        <BrowserRouter forceRefresh={false}>
            <Switch>
                <Route path='/' exact component={ListData} />
                <Route path='/detail/:id' exact component={DetailList} />
            </Switch>
        </BrowserRouter>
    )
}

function ListData(params) {
    const history = useHistory();
    const {data:ListData, isLoading, isFetching} = usePost();

    if(isLoading) return <h2>loading</h2>;

    return(
        <Fragment>
            {isFetching && console.log('fetching')}
            {ListData.map(item => {
                return( 
                    <li key={item.id}>
                        <a  
                            onClick={() => {
                                history.push(`/detail/${item.id}`);
                            }}
                            style={{color : queryCache.getQueryData(['detailPost', item.id]) ? 'green' : 'white'}}
                        >{item.title}</a>
                    </li>)
            })}

        </Fragment>
    )
}

function DetailList(props) {
    const param = useParams();
    const {data:DetailPost, isSuccess, isLoading, isInitialData} = useDetailPost('detailPost', parseInt(param.id));

    if(isLoading) return null;

    return(
        <Fragment>
            {isInitialData ? 
                <div className='card'>
                    <h2>{partText(DetailPost.title)}</h2>
                </div> : 
                <div className='card'>
                    <h2>{DetailPost.title}</h2>
                    <p>{DetailPost.body}</p>
                </div>
            }

            <button onClick={() => props.history.replace('/', [DetailPost.id])}>Back</button>
        </Fragment>
    )
}

function partText(item){
    return item.substr(0, Math.floor(Math.random() * 30 + 10)).concat('...');
}

export default AppTraining1;
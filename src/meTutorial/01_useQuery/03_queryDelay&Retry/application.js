import React, { Fragment } from 'react';
import {useQuery, queryCache} from 'react-query';
import Axios from 'axios';

function fetchQuery() {
    return Axios.get('https://jsonplaceholder.typicode.com/posts');
}

function ApplicationBasic3() {
    const queryInfo = useQuery('todo', fetchQuery, {
        retry : 2,
        refetchOnWindowFocus : false,
    })

    if(queryInfo.status === 'loading') return <h3>Loading...</h3>
    if(queryInfo.status === 'error') return <h3>{queryInfo.status}</h3>

    return(
        <Fragment>
            {queryInfo.data.data.map(item => {
                return <p key={item.id}>{item.body}</p>
            })}
        </Fragment>
    )
}

export default ApplicationBasic3;
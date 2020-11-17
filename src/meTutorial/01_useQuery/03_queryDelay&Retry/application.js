import React, { Fragment } from 'react';
import {useQuery} from 'react-query';
import Axios from 'axios';

function fetchQuery() {
    return Axios.get('https://jsonplaceholdera.typicode.com/posts');
}

function ApplicationBasic3() {
    const queryInfo = useQuery('todo', fetchQuery, {
        retry : 2
    })

    if(queryInfo.status === 'loading') return <h3>Loading...</h3>
    if(queryInfo.status === 'error') return <h3>{queryInfo.status}</h3>

    return(
        <Fragment>
            {console.log(queryInfo)}
        </Fragment>
    )
}

export default ApplicationBasic3;
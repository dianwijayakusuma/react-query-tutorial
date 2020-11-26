import React, { Fragment, useState } from 'react';
import {useQuery, useMutation, queryCache} from 'react-query';

function AppRefetchWindow() {
    const [state, setState] = useState(true);
    const {data:user , isLoading, isFetching} = useQuery('user', async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
        return data;
    }, {
        refetchOnWindowFocus : false
    });

    const fetchDataLogin = async (mutate) => {
        try {
            const data = await fetch(mutate[0]).then(res => res.json());
            return data;
        }catch(err) {
            queryCache.invalidateQueries('user', {
                refetchInactive : true
            });
        }
    }

    const [mutate, info] = useMutation(fetchDataLogin, {
        onSuccess : (data) => {
            if(data != undefined) {
                queryCache.setQueryData('user', data);
            }
            
            setState(state => !state);
        }
    })

    const handleMutateLogin = async () => {
        mutate(['https://jsonplaceholder.typicode.com/photos', 'login']);
    }

    const handleMutateLogout = async () => {
        mutate('logout');
    }

    if(isLoading) return null;

    return(
        <Fragment>
            {state ?
                <button 
                    onClick={() => handleMutateLogin()} 
                    disabled={info.isLoading} 
                    style={{opacity : info.isLoading && .5}}>
                    Login
                </button> : 
                <>
                    <button onClick={() => handleMutateLogout()}>Logout</button>
                    <h4>{user[0].title}</h4>
                    <img src={user[0].thumbnailUrl}/>
                </>
            }
        </Fragment>
    )
}

export default AppRefetchWindow
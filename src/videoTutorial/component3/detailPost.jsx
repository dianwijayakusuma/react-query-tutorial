import React, { Fragment, useState } from 'react';
import { useMutation, useQuery, queryCache } from 'react-query';
import { FetchDataDetail, FetchDataUpdate } from './PostList';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function DetailPost({match}){
    const history = useHistory();
    const [state, setState] = useState({title : ' ', author : ' '})
    const {isFetching , isError, isLoading, data, error, refetch} = useQuery(['DataDetail', match.params.id], FetchDataDetail, {
        refetchOnWindowFocus : false,
        onSuccess : (data) => {
            setState({
                title : data[0].title,
                author : data[0].author
            })
        }
    });

    const [mutate] = useMutation(FetchDataUpdate, {
        onSuccess : (newData) => {
            // refetch();
            queryCache.setQueryData(['DataDetail', match.params.id], [newData.data.book]);
        },
    });

    const onChangeHandler = (e) => {
        setState(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const update = (id) => {
        mutate({
            id : id,
            ...state
        })
    }
    
    if(isLoading) return <h4>Loading...</h4>
    if(isError) return <h5>{error.message}</h5>
    
    return(
        <Fragment>

        {isFetching && <p>Updating..</p>}
            <div className="card">
                <h3>{data[0].id}</h3>
                <p>{data[0].title}</p>
                <p>{data[0].author}</p>
            </div>

            <input type="text" name='title' value={state.title} onChange={onChangeHandler} />
            <input type="text" name='author' value={state.author} onChange={onChangeHandler} />
            <button onClick={() => update(data[0].id)}>UPDATE</button><br/>

            <button onClick={() => history.push('/')}>Back to list</button>
        </Fragment>
    )
}

export default DetailPost;
import React, { Fragment, useState } from 'react';
import { useQuery } from 'react-query';
import { FetchDataDetail } from './PostList';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function DetailPost({match}){
    const [state, setState] = useState({title : ' ', author : ' '})
    const history = useHistory();
    const {isFetching , isError, isLoading, data, error, refetch} = useQuery(['DataDetail', match.params.id], FetchDataDetail, {
        refetchOnWindowFocus : false,
        onSuccess : (data) => {
            setState({
                title : data[0].title,
                author : data[0].author
            })
        }
    });

    const onChangeHandler = (e) => {
        setState(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const update =  (id) => {
        axios({
            url : `https://web-server-book-dicoding.appspot.com/edit/${id}`,
            method : "put",
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded",
                "Content-Type" : "application/json",
                "X-Auth-Token" : "12345" 
            },
            data : {
                id : id,
                title : state.title,
                author : state.author
            }
        }).then(res => {
            refetch();
        }).catch(err => console.log(err))

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

            {console.log(state)}

            <input type="text" name='title' value={state.title} onChange={onChangeHandler} />
            <input type="text" name='author' value={state.author} onChange={onChangeHandler} />
            <button onClick={() => update(data[0].id)}>UPDATE</button><br/>

            {console.log(match)}
            <button onClick={() => history.push('/')}>Back to list</button>
        </Fragment>
    )
}

export default DetailPost;
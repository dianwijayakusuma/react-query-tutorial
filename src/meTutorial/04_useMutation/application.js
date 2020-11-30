import React, { Fragment, useContext, useState } from 'react';
import {useQuery, useMutation, queryCache, ReactQueryCacheProvider} from 'react-query';
import {ErrorBoundary} from 'react-error-boundary';
import axios from 'axios';

function BasicMutation() {
    const [state, setState ] = useState({id : 0, title : '', author : ''});
    const {data, isLoading, refetch} = useQuery('book' , async () => {
        const data = await axios.get('https://web-server-book-dicoding.appspot.com/list');
        return data.data.books;
    }, {
        refetchOnWindowFocus : false
    });

    console.log(queryCache);

    const [mutate, info] = useMutation(async (newData) => {
        const data = await axios({
            url : `https://web-server-book-dicoding.appspot.com/add`,
            method : "post",
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded",
                "Content-Type" : "application/json",
                "X-Auth-Token" : "12345" 
            },
            data : JSON.stringify(newData)
        });

        return data;
    }, {
        onMutate:  (newData) => {
            const snapshot = queryCache.getQueryData('book');
            const findData = snapshot.find(item => item.id === parseInt(newData.id));
            
            if(!findData) queryCache.setQueryData('book', old => [...old, newData]);

            return () => queryCache.setQueryData('book', snapshot);
        },
        onError : (err, newTodo, rollback) => {
            rollback();
        },
        onSettled : () => queryCache.invalidateQueries('book', {refetchActive : true})
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(state);
    }

    const handleChange = (e) => {
        setState(prev => ({
            ...prev, 
            [e.target.name] : e.target.value
        }))
    }

    if(isLoading) return <p style={{textAlign : 'center'}}>Loading..</p>

    return(
        <Fragment>
                <form onSubmit={handleSubmit}>
                    <input type="number" name={Object.keys(state)[0]} onChange={handleChange}/>
                    <input type="text" placeholder='masukan judul buku' name={Object.keys(state)[1]} onChange={handleChange} />
                    <input type="text" placeholder='masukan body buku' name={Object.keys(state)[2]} onChange={handleChange}/>
                    <button>{info.isLoading ? 'Send...' : 'Submit'}</button>
                </form>

            <ErrorBoundary FallbackComponent={FallbackError}>
                <Data param={data}/>
            </ErrorBoundary>
        </Fragment>
    )
}

function Data({param}) {
    return(
        <>
        {console.log(param)}
            {param.map(item => {
                return <h4 key={item.id}>{item.title}</h4>
            })}
        </>
    )
}

function FallbackError(err) {
    return(
        <>
            {console.log(err)}
            <h2>Oh no, something wrong!</h2>
        </>
    )
}

export default BasicMutation;
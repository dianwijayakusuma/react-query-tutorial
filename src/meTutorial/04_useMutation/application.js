import React, { Fragment, useState } from 'react';
import {useQuery, useMutation, queryCache} from 'react-query';
import axios from 'axios';

function BasicMutation() {
    const [state, setState ] = useState({id : 0, title : '', author : ''});
    const {data, isLoading, refetch} = useQuery('book' , async () => {
        return await axios.get('https://web-server-book-dicoding.appspot.com/list');
    }, {
        refetchOnWindowFocus : false
    });

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
        onSuccess : (data) => {
            queryCache.invalidateQueries('book');
        },
        onError : (err) => {
            alert(err)
        }
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
            {console.log(state)}
            <form onSubmit={handleSubmit}>
                <input type="number" name={Object.keys(state)[0]} onChange={handleChange}/>
                <input type="text" placeholder='masukan judul buku' name={Object.keys(state)[1]} onChange={handleChange} />
                <input type="text" placeholder='masukan body buku' name={Object.keys(state)[2]} onChange={handleChange}/>
                <button>{info.isLoading ? 'Send...' : 'Submit'}</button>
            </form>

            {data.data.books.map(item => {
                return <h4 key={item.id}>{item.title}</h4>
            })}
        </Fragment>
    )
}

export default BasicMutation;
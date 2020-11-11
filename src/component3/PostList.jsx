import React, { Fragment } from 'react';
import { useQuery } from 'react-query';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

async function FetchDataList() {
    const res = await axios.get('https://web-server-book-dicoding.appspot.com/list');
    return res;
}

export async function FetchDataDetail(key, id) {
    const res = await axios.get('https://web-server-book-dicoding.appspot.com/list');
    const checkData = res.data.books.filter(item => item.id == id);
    return checkData;
}

function PostList(props) {
    const {isFetching, isError, isLoading, data, error} = useQuery('PostData', FetchDataList, {
        retry : 1,
        refetchOnWindowFocus : false
    });

    if(isLoading) return <h4>Loading...</h4>
    if(isError) return <h5>{error.message}</h5>

    return(
        <Fragment>
            {console.log(props)}
            {/* {isFetching && <p>Updating..</p>} */}
            <h1>Data</h1>

            {data.data.books.map(item => {
                return <div className='card' key={item.id}>
                                <h3>{item.id}</h3>
                                <p>{item.title}</p>
                                <p>{item.author}</p>
                                <button onClick={() => props.history.push(`/post/${item.id}`)}>View</button>
                            </div>
            })}
        </Fragment>
    )
}

export default PostList;
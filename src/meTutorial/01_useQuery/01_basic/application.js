import React, { Fragment, useState } from 'react';
import { useQuery } from 'react-query'
import axios from 'axios';

async function FetchInfo(...res) {
    console.log(res)
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
} 

function ApplicationBasic1() {
    const [state, setState] = useState(1);
    const {isStale, isError, isLoading, data} = useQuery({
        queryKey : [state, {params1 : 1, param2 : 2}],
        queryFn : FetchInfo,
        config : {
            refetchOnWindowFocus : false
        }
    })

    if(isLoading){
        return <h2>Memuat..</h2>
    } 

    return(
        <Fragment>
            {data.data.map(item => {
                return <p key={item.id}> {item.id}. {item.title} <button onClick={() => setState(state+1)}>Klik</button> </p>
            })}
        </Fragment>
    )
}

export default ApplicationBasic1;
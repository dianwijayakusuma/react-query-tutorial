import React, { Fragment, useState } from 'react';
import {useQuery, queryCache} from 'react-query';
import axios from 'axios';

async function getUserByEmail() {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
}

async function getDetailUser(key, emailUser) {
    console.log('fetch get detail user');
    const data = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data.data.filter(item => item.email === emailUser ? item : false);
}

function ApplicationBasic2() {
    const [emailUser, setEmailUser] = useState(false);

    // get user 
    const {data,isLoading} = useQuery('user', getUserByEmail, {
        refetchOnWindowFocus : false,
    })

    // get detail user 
    const {data:detailUser} = useQuery(['detailUser', emailUser], getDetailUser, {
        refetchOnWindowFocus : false,
        enabled : emailUser,
    })

    if(isLoading) return <h4>Memuat...</h4>

    return(
        <Fragment>

            {data.data.map((item) => {
                return (
                    <div key={item.id}>
                        <h5>{item.email} <button onClick={() => {
                            setEmailUser(item.email);
                        }}>Klik detail</button></h5>

                        {emailUser === item.email && detailUser && <DetailUser detailUser={detailUser} />}
                    </div>
                )
            })}

        </Fragment>
    )
}

function DetailUser({detailUser}) {
    return(
        <>

            {detailUser.map(item => {
                return <div key={item.id} style={{color : 'yellow'}}>
                    <p>{item.name}</p>
                    <p>{item.username}</p>
                    <p>{item.website}</p>
                    <p>{item.phone}</p>
                    <p>{item.email}</p>
                </div>
            })}
        
        </>
    )
}

export default ApplicationBasic2;
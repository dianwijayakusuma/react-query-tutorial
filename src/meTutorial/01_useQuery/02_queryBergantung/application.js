import React, { Fragment, useState } from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';

async function getUserByEmail() {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
}

async function getDetailUser(key, emailUser) {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data.data.filter(item => item.email === emailUser ? item : false);
}

function ApplicationBasic2() {
    const [emailUser, setEmailUser] = useState(false);
    const [idUser, setIdUser] = useState(0);

    // get user 
    const {data,isLoading} = useQuery('user', getUserByEmail, {
        refetchOnWindowFocus : false,
    })

    // get detail user 
    const {data:detailUser} = useQuery(['detailUser', emailUser], getDetailUser, {
        refetchOnWindowFocus : false,
        enabled : emailUser
    })

    if(isLoading) return <h4>Memuat...</h4>

    return(
        <Fragment>
            {console.log(detailUser)}

            {data.data.map((item) => {
                return (
                    <div key={item.id}>
                        <h5>{item.email} <button onClick={() => {
                            setEmailUser(item.email);
                            setIdUser(item.id)
                        }}>Klik detail</button></h5>

                        {idUser === item.id && detailUser && <DetailUser detailUser={detailUser} />}
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
                return <div key={item.id}>
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
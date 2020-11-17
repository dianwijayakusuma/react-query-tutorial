import React, { useState } from 'react';
import { useQuery, useQueryCache } from 'react-query';

function Apps() {
    return(
        <>
            <Exchange/>
        </>
    )
}

async function fetchExchange(currency) {
    const response = await fetch(`https://api.ratesapi.io/api/latest/?base=${currency}`);
    return response.json();
}

function Exchange() {
    const cache = useQueryCache();
    const [currency, setCurrency] = useState('USD');
    const {data, status, error} = useQuery(currency, fetchExchange);

    return(
        <>
            <button 
                onClick={() => setCurrency('USD')}
                style={
                    cache.getQueryData('USD') ? {background : 'white', color : '#333'} : {}
                }
            >USD</button>
            <button 
                onClick={() => setCurrency('JPY')}
                style={
                    cache.getQueryData('JPY') ? {background : 'white', color : '#333'} : {}
                }
            >JPY</button>
            <button 
                onClick={() => setCurrency('CAD')}
                style={
                    cache.getQueryData('CAD') ? {background : 'white', color : '#333'} : {}
                }
            >CAD</button>

            <h1>Currency {currency}</h1>

            <p>{status == 'loading' && 'Loading...'}</p>
            <p>{status == 'error' && error}</p>
            
            <p>{JSON.stringify(data, null, 2)}</p>
        </>
    )
}

export default Apps;
import React, { Fragment, useState } from 'react';
import {queryCache, useInfiniteQuery} from 'react-query';
import axios from 'axios';

function Trainings() {
    const [numb, setNumb] = useState(0);
    const {data : PageData, isLoading ,fetchMore, canFetchMore, isFetchingMore} = 
        useInfiniteQuery('posts', async (key, numb) => {
            const data = await axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${numb}&_limit=10`);
            return data;
    }, {
        getFetchMore : (lastGroup, allGrout) => {
            console.log(allGrout);
        },
        refetchOnWindowFocus : false,
    })

    if(isLoading) return <h2>Memuat...</h2>

    return(
        <Fragment>
            {PageData.map(item => {
                return item.data.map(project => {
                    return <div className="card" key={project.id}>
                                    <h3>{project.id}.{project.title}</h3>
                                    <p>{project.body}</p>
                                </div>
                })
            })}

            {PageData.length <= 9 && 
                <button onClick={() => {
                    const star = (numb + 10); 
                    fetchMore(star);
                    setNumb(star);
                }}>
                    {isFetchingMore ? 'Loading...' : !canFetchMore && 'Load More' }
                </button>
            }

        </Fragment>
    )
}

export default Trainings;
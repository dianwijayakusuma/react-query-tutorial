import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import usePost from './usePost';

function PostList() {
    const {data:postList, isLoading} = usePost('data');
    const providerPage= useHistory();

    if(isLoading) return <h3>Loading...</h3>;

    return (
        <Fragment>
            <div style={{width : '80%', margin : 'auto'}}>
                {postList.map(item => {
                    return <div className='card' key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>

                        <button 
                            onClick={() => {
                                providerPage.push(`/detailpost/${item.id}`);
                            }}
                        >
                            Detail post
                        </button>
                    </div>
                })}
            </div>
        </Fragment>
    )
}

export default PostList;
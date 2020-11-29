import React, { Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import usePostDetail from './usePostDetail';

function PostDetail(props) {
    const param = useParams();
    const {data:detailPost, isLoading} = usePostDetail('detailpost', parseInt(param.id));

    if(isLoading) return <h3>Fetching data..</h3>

    return(
        <Fragment>
            <div className="card">
                <h2>{detailPost.title}</h2>
                <p>{detailPost.body}</p>
            </div>

            <button
                onClick={() => {
                    props.history.push('/');
                }}
            >
                Back
            </button>

        </Fragment>
    )
}

export default PostDetail;
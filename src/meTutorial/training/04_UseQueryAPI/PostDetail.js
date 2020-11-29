import React, { Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import usePostDetail from './usePostDetail';
import {ErrorBoundary} from 'react-error-boundary';

function PostDetail(props) {
    const param = useParams();
    const {data:detailPost, isLoading} = usePostDetail('detailpost', parseInt(param.id));

    if(isLoading) return <h3>Fetching data..</h3>

    return(
        <Fragment>
                <div className="card">
                    <ErrorBoundary FallbackComponent={ErrorFallback} onError={MyErrorComponent}>
                        <Data param={detailPost} />
                    </ErrorBoundary>
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

function Data({param}) {
    return(
        <>
            <h2>{param.title}</h2>
            <p>{param.body}</p>
        </>
    )
}

function MyErrorComponent(error, info) {
    console.log(info);
}

function ErrorFallback({error, resetErrorBoundary}) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }

export default PostDetail;

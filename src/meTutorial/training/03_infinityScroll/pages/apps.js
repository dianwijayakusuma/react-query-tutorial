import React, { Fragment, useState, useEffect} from 'react';
import useInfinityPage from '../hook/useInfinityPage';
import useInfiniteScroll from 'react-infinite-scroll-hook';

function AppInfinityPage(){
    const [numb, setNumbPage] = useState(0);
    const [rangeData, setRangeData] = useState(0);
    const {data:pageData, isLoading, isFetchingMore, fetchMore} = useInfinityPage('PageDataOffice');

    const handleLoadMore = () => {
        if(pageData.length <= 11) {
            const num = numb + 10;
            fetchMore(num);
            setNumbPage(num);
            setRangeData(pageData);
        }

    }

   const infiniteRef = useInfiniteScroll({
       loading : isFetchingMore,
       hasNextPage : fetchMore,
       onLoadMore : handleLoadMore,
        scrollContainer : window,
        checkInterval : 1000
   })

    if(isLoading) {
        return <h4>Loading...</h4> 
    }

    return(
        <Fragment>
            {console.log(rangeData.length)}
            <div ref={infiniteRef}>
                {pageData.map(item => item.map(item => {
                    return <div className='card' key={item.id}>
                                    <h4>{item.id}. {item.title}</h4>
                                    <p>{item.body}</p>
                                </div>
                }))}

                {isFetchingMore && numb <= 90 ? <h5>Fetch data...</h5> : null}
            </div>
        </Fragment>
    )
}

export default AppInfinityPage;
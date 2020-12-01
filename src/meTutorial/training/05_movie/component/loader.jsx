import React, { Fragment } from 'react';

function Load() {
    return(
        <div style={{position : 'absolute', top:'0', right:'0', left:'0', right:'0', zIndex:99999999, background : '#222'}}> 
            <img src="https://www.pinclipart.com/picdir/big/175-1750255_loading-gif-blue-transparent-download-animated-gif-loading.png" alt='loader' style={{width : '100%', height : '100vh'}}/>
        </div>
    )
}

export default Load;
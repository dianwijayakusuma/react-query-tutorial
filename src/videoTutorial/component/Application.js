import React, { useState } from 'react';
import Navbar from './Navbar';
import Planets from './Planets';
import People from './People';

function Application() {
  let [page, setPage] = useState('planets');

  return (
        <div className="App">
            <h1>Star Wars Info</h1>
            <Navbar setPage={setPage} />
            <div className="content">
                { page === 'planets' ? <Planets /> : <People /> }
            </div>
        </div>
  );
}

export default Application;
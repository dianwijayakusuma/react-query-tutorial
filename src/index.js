import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Application from './component/Application';
import { ReactQueryDevtools } from 'react-query-devtools'
import Apps from './component2/apps';
import Router from './videoTutorial/component3/Route';
import ApplicationBasic1 from './meTutorial/01_useQuery/01_basic/application';
import ApplicationBasic2 from './meTutorial/01_useQuery/02_queryBergantung/application';
import ApplicationBasic3 from './meTutorial/01_useQuery/03_queryDelay&Retry/application';

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryDevtools initialIsOpen={false} />
    <ApplicationBasic3 />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Application from './component/Application';
import { ReactQueryDevtools } from 'react-query-devtools'
import Apps from './component2/apps';
import Router from './component3/Route';

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryDevtools initialIsOpen={false} />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

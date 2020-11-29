import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Application from './component/Application';
import { ReactQueryDevtools } from 'react-query-devtools'
// import Apps from './component2/apps';
import Router from './videoTutorial/component3/Route';
import ApplicationBasic1 from './meTutorial/01_useQuery/01_basic/application';
import ApplicationBasic2 from './meTutorial/01_useQuery/02_queryBergantung/application';
import ApplicationBasic3 from './meTutorial/01_useQuery/03_queryDelay&Retry/application';
import AppTraining from './meTutorial/01_useQuery/04_initialData&initialStale/training';
import TrainingPagination from './meTutorial/02_usePagination/01_basic/trainingPagination';
import Trainings from './meTutorial/03_useInfinityQuery/trainings';
import RouteApplication from './meTutorial/03_useInfinityQuery/route';
import BasicMutation from './meTutorial/04_useMutation/application';
import AppTraining1 from './meTutorial/training/01_basicTraining/component/application';
import AppRefetchWindow from './meTutorial/training/02_refetchWindow/application';
import AppInfinityPage from './meTutorial/training/03_infinityScroll/pages/apps';
import ApplicationUseQueryAPI from './meTutorial/training/04_UseQueryAPI/RoutingApp';

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryDevtools initialIsOpen={false} />
    <ApplicationUseQueryAPI />
  </React.StrictMode>,
  document.getElementById('root')
);

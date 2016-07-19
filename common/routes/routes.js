import React from 'react';
import {IndexRoute, Route, Redirect} from 'react-router';
import UploadSucceed from '../components/UploadSucceed/UploadSucceed'

import {
  App,
  About,
  Dashboard,
  Memory,
  Network,
  Summary,
  TPS,
  Upload,
  NotFound
} from '../components'

export default (store) => {
  return (
    <Route component={App}>
      { /* Home (main) route */ }
      <Redirect from="/" to="/dashboard"/>
      <IndexRoute component={Dashboard}/>

      { /* Routes */ }
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/upload" component={Upload}/>
      <Route path="/summary" component={UploadSucceed(Summary)}/>
      <Route path="/memory" component={UploadSucceed(Memory)}/>
      <Route path="/network" component={UploadSucceed(Network)}/>
      <Route path="/tps" component={UploadSucceed(TPS)}/>
      <Route path="/about" component={About}/>

      { /* Catch all route */ }
      <Route path="/*" component={NotFound} status={404} />
    </Route>
  );
};
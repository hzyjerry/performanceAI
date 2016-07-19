import React from 'react';
import {IndexRoute, Route, Redirect} from 'react-router';

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
      <Route path="/summary" component={Summary}/>
      <Route path="/memory" component={Memory}/>
      <Route path="/network" component={Network}/>
      <Route path="/tps" component={TPS}/>
      <Route path="/upload" component={Upload}/>
      <Route path="/about" component={About}/>

      { /* Catch all route */ }
      <Route path="/*" component={NotFound} status={404} />
    </Route>
  );
};
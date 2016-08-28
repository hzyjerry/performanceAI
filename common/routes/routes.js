import React from 'react';
import {IndexRoute, Route, Redirect, IndexRedirect} from 'react-router';
import UploadSucceed from '../components/UploadSucceed/UploadSucceed'

import {
  App,
  AppV2,
  Application,
  Analytics,
  About,
  Dashboard,
  Memory,
  Network,
  Summary,
  SummaryUser,
  SummaryUserOverview,
  SummaryUserDetailed,
  SummaryAdmin,
  SummaryAdminOverview,
  SummaryAdminDetailed,
  TimeSeriesAdmin,
  StatsUser,
  TimeUser,
  TPS,
  Upload,
  Disk,
  NotFound,
  Issue
} from '../components'

export default (store) => {
  return (
    <Route component={App}>
      <Route path="/v1" component={App}>
        { /* Home (main) route */ }
        <Redirect from="/" to="/dashboard"/>
        <IndexRoute component={Dashboard}/>

        { /* Routes */ }
        <Route path="dashboard" component={Dashboard}/>
        <Route path="upload" component={Upload}/>
        <Route path="summary" component={UploadSucceed(Summary)}/>
        <Route path="memory" component={UploadSucceed(Memory)}/>
        <Route path="network" component={UploadSucceed(Network)}/>
        <Route path="disk" componeant={UploadSucceed(Disk)}/>
        <Route path="tps" component={UploadSucceed(TPS)}>
          <Route path=":id" component={UploadSucceed(Issue)}/>
        </Route>
        <Route path="about" component={About}/>

        { /* Catch all route */ }
        <Route path="*" component={NotFound} status={404} />
      </Route>
      <Route path="/v2" component={AppV2}>
        <Route path="user">
          <Route path="dashboard" component={Dashboard}/>
          <Route path="application" component={Application}/>
          <Route path="upload" component={Upload}/>
          <Route path="analytics" component={Analytics}>
            <Route path="summary" component={SummaryUser}>
              <IndexRedirect to="overview"/>
              <Route path="overview" component={SummaryUserOverview}/>
              <Route path="detailed" component={SummaryUserDetailed}/>
            </Route>
            <Route path="stats" component={StatsUser}/>
            <Route path="time" component={TimeUser}/>
          </Route>
          <Route path="about" component={About}/>
          { /* Catch all route */ }
          <Route path="*" component={NotFound} status={404} />
        </Route>
        <Route path="admin">
          <Route path="dashboard" component={Dashboard}/>
          <Route path="application" component={Application}/>
          <Route path="upload" component={Upload}/>
          <Route path="analytics" component={Analytics}>
            <Route path="summary" component={SummaryAdmin}>
              <IndexRedirect to="overview"/>
              <Route path="overview" component={SummaryAdminOverview}/>
              <Route path="detailed" component={SummaryAdminDetailed}/>
            </Route>
            <Route path="time" component={TimeSeriesAdmin}/>
          </Route>
          <Route path="about" component={About}/>
          { /* Catch all route */ }
          <Route path="*" component={NotFound} status={404} />
        </Route>
      </Route>
    </Route>
  );
};
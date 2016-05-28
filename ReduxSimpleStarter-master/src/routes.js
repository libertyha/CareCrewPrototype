import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";
import BodyReport from './containers/body-report';
import UserPatients from './containers/user-patients';
import BodyInput from './components/bodyInput';
import DemoStart from './components/demoStart';

export default (
  <Route path="/" component={App}>
  <Route path="SymptomTracker" component={BodyInput} />
  <Route path="SymptomTrackerReport" component={BodyReport} />
  <Route path="myPatients" component={UserPatients} />
  <Route path="demoStart" component={DemoStart} />
  </Route>
);

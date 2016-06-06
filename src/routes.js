import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";
import BodyReport from './containers/body-report';
import UserPatients from './containers/user-patients';
import BodyInput from './components/bodyInput';
import caretakerOptions from './components/caretakerOptions';
import DemoStart from './containers/demoStart';
import CareCheckList from './components/shift_tasklist_and_notifications';
import CareCentral from './containers/care-central';

export default (
  <Route component={App}>
    <Route path="/" component={CareCentral} />
    <Route path="CareCentral" component={CareCentral} />
    <Route path="SymptomTracker" component={BodyInput} />
    <Route path="SymptomTrackerReport" component={BodyReport} />
    <Route path="myClients" component={UserPatients} />
    <Route path="myFamily" component={UserPatients} />
    <Route path="startDemo" component={DemoStart} />
    <Route path="caretakerFeatures" component={caretakerOptions} />
    <Route path='careCheckList' component={CareCheckList} />
  </Route>
);

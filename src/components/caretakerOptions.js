import React from 'react';
import { Component } from 'react';
import RadioItem from './radioItem';
import BodyLink from '../containers/body-link';
import RadioButtons from '../containers/radio-buttons';
import SubmitBody from '../containers/body-submit';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
const blockButton = {maxWidth: 400, margin: '0 auto 10px'};

export default class CaretakerOptions extends Component {
  goToSymptomTracker(){
    console.log('this will go to the symptom tracker')
    //this.props.fetchBodyMeasures(this.props.user[0]._id)

  };
  goToList(){
    console.log('this will go to the daily list')
    //this.props.fetchBodyMeasures(this.props.user[0]._id)

  };
  render() {
    return (
      <div className="blockButtons" style={blockButton}>
      <Link  to="/shift">  <Button onClick={() => this.goToList()} bsStyle ="primary" bsSize="large" block>  Care List</Button></Link>
<br></br>
      <Link  to="/SymptomTracker"><Button onClick={() => this.goToSymptomTracker()} bsStyle ="primary" bsSize="large" block> Symptom Tracker </Button></Link>
      </div> //<img src={'http://www.clker.com/cliparts/P/Q/t/5/E/r/white-stick-figure.svg'} alt="human figure">

    );
  }
}

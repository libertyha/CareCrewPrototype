import React from 'react';
import { Component } from 'react';
import RadioItem from './radioItem';
import BodyLink from '../containers/body-link';
import RadioButtons from '../containers/radio-buttons';
import SubmitBody from '../containers/body-submit';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import { setActivePage } from '../actions/index';
import {connect} from 'react-redux';
import { fetchTasks } from '../actions/index';
import { fetchNotifications } from '../actions/index';
import { fetchProgressNotes } from '../actions/index';

const buttonImg = {'float': 'left', 'height': '100px'}
const buttonText = {'marginTop': '30px'}
const blockButton = {maxWidth: 400, margin: '0 auto 10px'};

class CaretakerOptions extends Component {
  componentWillMount() {
      this.props.setActivePage("Options");
  };
  goToSymptomTracker(){
    console.log('this will go to the symptom tracker')
    //this.props.fetchBodyMeasures(this.props.user[0]._id)

  };
  goToList(){
    console.log('this will go to the daily list and fill in props')
    this.props.fetchTasks(this.props.patient[0]._id);
    this.props.fetchNotifications(this.props.patient[0]._id);
    this.props.fetchProgressNotes(this.props.patient[0]._id);
    //this.props.fetchBodyMeasures(this.props.user[0]._id)

  };
  render() {
    return (
      <div className="blockButtons" style={blockButton}>
      <Link  to="/careCheckList">  <Button onClick={() => this.goToList()} bsStyle ="primary" bsSize="large" block>  <img style={buttonImg} src={require('../img/7.png')}/><div style={buttonText}><h2>  Care Checklist</h2></div></Button></Link>
<br></br>
      <Link  to="/SymptomTracker"><Button onClick={() => this.goToSymptomTracker()} bsStyle ="primary" bsSize="large" block> <img style={buttonImg} src={require('../img/6.png')}/><div style={buttonText}><h2> Symptom Tracker </h2></div></Button></Link>
      </div> //<img src={'http://www.clker.com/cliparts/P/Q/t/5/E/r/white-stick-figure.svg'} alt="human figure">

    );
  }
}
function mapStateToProps(state){
  return{
    patient: state.patients.patient,
    };
}

function mapDispatchToProps(dispatch) {
return bindActionCreators({setActivePage: setActivePage, fetchTasks: fetchTasks, fetchNotifications: fetchNotifications, fetchProgressNotes: fetchProgressNotes}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CaretakerOptions);

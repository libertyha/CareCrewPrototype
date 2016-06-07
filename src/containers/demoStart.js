import React from 'react';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPatientsByUser } from '../actions/index';
import { fetchUser } from '../actions/index';
import { fetchUsers } from '../actions/index';
import { resetUser } from '../actions/index';
import { resetPatient } from '../actions/index';
import { resetPatients } from '../actions/index';
import { setActivePage } from '../actions/index';
const wellStyles = {maxWidth: 500, margin: '0 auto 10px'};
const buttonImg = {'float': 'left', 'height': '100px'}
const buttonText = {'marginTop': '30px'}

export default class DemoStart extends Component {
  componentWillMount() {
    this.props.resetUser();
    this.props.resetPatient();
    this.props.resetPatients();
    this.props.setActivePage("Begin as...");
  };

  onUserSelect(id) {
    console.log('get user Name using' + id);
    this.props.fetchUser(id);
  //  .then(() => { console.log('fetch users patients for global state' + this.props.user[0].firstName); });
    this.props.fetchPatientsByUser(id);

      // this.props.fetchPatientsByUser(this.props.user[0].firstName);
    this.props.fetchUsers();

  };

  render() {
    if(!this.props.demoObject.caretakerId){
      return <div> Users are loading...</div>
    }
    else{
    return (
      <div className="Well" style={wellStyles}>
    <ul>
               <Link  to="/myClients">
                   <Button onClick={() => this.onUserSelect(this.props.demoObject.caretakerId)} bsStyle ="primary" bsSize="large" block>
                       <img className="img-circle" style={buttonImg} src={require('../img/gloria.png')}/>
                       <div style={buttonText}><h4> I am Gloria (care aide) </h4></div>
                   </Button>
</Link>
<br></br>
 <Link  to="/myFamily">
    <Button onClick={() => this.onUserSelect(this.props.demoObject.familyId)} bsStyle ="primary" bsSize="large" block>
        <img className="img-circle" style={buttonImg} src={require('../img/ross.png')}/>
        <div style={buttonText}><h4> I am Ross (family member) </h4></div>
    </Button>
</Link>

    </ul>
          <p>Gloria is a caretaker with many clients, which include Ross’s father.  She is interested in quickly getting the necessary tasks and information to help her get through her busy shifts.  With CareCrew’s Symptom Tracker, Gloria can record the reported pain points of her clients.</p>
          <p>Ross is a family member of an aging senior.  He is interested in getting a summary of how his father are doing.  He also wants to get reports that will make the next doctor’s visit more efficient.  With CareCrew, Ross can modify the care plan for his family members for the caretaker’s next shifts.</p>
      </div> //<img src={'http://www.clker.com/cliparts/P/Q/t/5/E/r/white-stick-figure.svg'} alt="human figure">

    );
    }
  }
}
function mapStateToProps(state){
  return{
      users: state.users.all,
      user: state.users.user,
      patients: state.patients.all,
      demoObject: state.demoObject.all
    };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser: fetchUser, fetchUsers: fetchUsers, fetchPatientsByUser: fetchPatientsByUser, resetUser: resetUser, resetPatient: resetPatient, resetPatients: resetPatients, setActivePage: setActivePage}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DemoStart);

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
const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

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
    return (
      <div className="Well" style={wellStyles}>
    <ul>
               <Link  to="/myClients">
    <Button onClick={() => this.onUserSelect('5751f5c16dfed61a00f0e015')} bsStyle ="primary" bsSize="large" block>I am Gloria (caretaker)</Button>
</Link>
<br></br>
 <Link  to="/myFamily">
    <Button onClick={() => this.onUserSelect('5751f5486dfed61a00f0e014')} bsStyle ="primary" bsSize="large" block>I am Ross (family member)</Button>
</Link>

    </ul>
      </div> //<img src={'http://www.clker.com/cliparts/P/Q/t/5/E/r/white-stick-figure.svg'} alt="human figure">

    );
    }
}
function mapStateToProps(state){
  return{
      users: state.users.all,
      user: state.users.user,
      patients: state.patients.all
    };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser: fetchUser, fetchUsers: fetchUsers, fetchPatientsByUser: fetchPatientsByUser, resetUser: resetUser, resetPatient: resetPatient, resetPatients: resetPatients, setActivePage: setActivePage}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DemoStart);

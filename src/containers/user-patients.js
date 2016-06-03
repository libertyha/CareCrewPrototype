import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchPatient } from '../actions/index';
import { Link } from 'react-router';
import { resetPatient } from '../actions/index';

export default class UserPatients extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
      this.props.resetPatient();
  }
  goToPatient(thisID){
     console.log('you clicked a patient');
     console.log(thisID);
     this.props.fetchPatient(thisID);
   }
  renderPatients() {
      return this.props.patients.map((patient) => {
          return (
           <Link  to="/SymptomTrackerReport"><li className="list-group-item" onClick={() => this.goToPatient(patient._id)}  key={patient._id}>
                <span className="pull-xi-right">{patient.firstName}</span>
                <strong>{patient.lastName}</strong>
            </li></Link>);});}

    render() {
      if(!this.props.user){
          return <div> Fetching your account </div>
      }
      if(!this.props.patients[0]){
        return <div> Fetching your clients </div>
      }
      if(!this.props.patient){
        return <div>
          {this.renderPatients()}
        </div>
      }
      else{
      return <div>
        {this.renderPatients()}
       the current patient is {this.props.patient[0].firstName}
      </div>
      }
    }
}
    function mapStateToProps(state){
      return{
        user: state.users.user,
        patients: state.patients.all,
        patient: state.patients.patient
        };
    }
    function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPatient: fetchPatient, resetPatient: resetPatient}, dispatch);
    }
    export default connect(mapStateToProps, mapDispatchToProps)(UserPatients);

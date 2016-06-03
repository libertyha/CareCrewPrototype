import React, {Component} from 'react';
import { fetchPatientsByUser } from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


export default class UserPatients extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {

  };
  getPatientList(){
    console.log("hopefully get patients from id is running" + this.props.user[0]._id)
    this.props.fetchPatientsByUser(this.props.user[0]._id);
  }
  goToPatient(thisID){
     console.log('you clicked a patient');
     console.log(thisID);
   }
  renderPatients() {
      return this.props.patients.map((patient) => {
          return (
            <li className="list-group-item" onClick={() => this.goToPatient(patient._id)}  key={patient._id}>
                <span className="pull-xi-right">{patient.firstName}</span>
                <strong>{patient.lastName}</strong>
            </li>);});}

    render() {
      if(!this.props.user){
          return <div>
          Please log in to see your care clients
          </div>
      }
      if(!this.props.patients[0]){
        return <div>
        fetching your clients
      </div>
      }
      else{
      return <div>
        {this.renderPatients()}

      </div>
      }
    }
      };

    function mapStateToProps(state){
      return{
        user: state.users.user,
        patients: state.patients.all
        };
    }
    function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPatientsByUser: fetchPatientsByUser}, dispatch);
    }
    export default connect(mapStateToProps, mapDispatchToProps)(UserPatients);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchPatient } from '../actions/index';
import { Link } from 'react-router';
import { resetPatient } from '../actions/index';
import { setActivePage } from '../actions/index';

//use the router to figure out what to show

export default class UserPatients extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
      this.props.resetPatient();
      //change page name based on user type
      if(this.props.routes[1].path == 'myClients'){
        this.props.setActivePage("My care clients");
      }
      else if(this.props.routes[1].path == 'myFamily'){
        this.props.setActivePage("My family members");
      }

  }
  goToPatient(thisID){
     this.props.fetchPatient(thisID);
   }
  renderPatients(goToRoute) {
      return this.props.patients.map((patient) => {
          return (
           <Link  to={goToRoute}><li className="list-group-item" onClick={() => this.goToPatient(patient._id)}  key={patient._id}>
                <span className="pull-xi-right">{patient.firstName} </span>
                <strong>{patient.lastName}</strong>
            </li></Link>);});}

    render() {
      //future: put in case for server
      if(!this.props.user){
             return <div> Fetching your account </div>
         }
         if(!this.props.patients[0]){
           return <div> Fetching your clients </div>
         }
      if(this.props.routes[1].path == 'myFamily'){
        return <div>   {this.renderPatients("/SymptomTrackerReport")}</div>

      }
      if(this.props.routes[1].path == 'myClients'){
        return <div> {this.renderPatients("/caretakerFeatures")}</div>

      }
      else{
      return <div>
        {this.renderPatients()}
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
    return bindActionCreators({setActivePage: setActivePage, fetchPatient: fetchPatient, resetPatient: resetPatient}, dispatch);
    }
    export default connect(mapStateToProps, mapDispatchToProps)(UserPatients);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchBodyMeasures } from '../actions/index';
import { setActivePage } from '../actions/index';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

const tableStyle = {'width': '100%', 'textAlign': 'center', 'marginTop': '15px'};
const tableHeadStyle = {'textAlign': 'center'};

export default class BodyReport extends Component {
    constructor(props){
      super(props);
      this.state = {isBodyMeasuresCalled: false};
    }
    componentWillMount() {
        this.props.setActivePage("Run report");
    };
    getBodyMeasures(){
      this.props.fetchBodyMeasures(this.props.patient[0]._id)
      console.log('trying to report on patient pain for patient ' + this.props.patient[0]._id+ ' ' + this.props.patient[0].firstName)
       this.setState({isBodyMeasuresCalled: true})
    };
    renderBodyMeasures() {
      return this.props.bodyMeasures.map((bodyMeasure) => {
        return (
        <tr><td> {bodyMeasure.bodyPart} </td>
          <td>{bodyMeasure.measurementUnit} </td>
          <td>{bodyMeasure.measurement} </td>
          <td>{bodyMeasure.updatedDate.substring(0,10)}</td></tr>);
      });
    }
    render() {
      if (!this.props.bodyMeasures[0] && !this.state.isBodyMeasuresCalled) {
        return <div>
        {console.log(this.state.isBodyMeasuresCalled)}
        <Button onClick={() => this.getBodyMeasures()}> Generate Report </Button>
        </div>
      }
       return <div>
       <Button onClick={() => this.getBodyMeasures()}> Generate Report </Button>

        <Table striped bordered condensed hover style={tableStyle}>
        <thead>
            <tr><th style={tableHeadStyle}>Location</th>
            <th style={tableHeadStyle}>Symptom</th>
            <th style={tableHeadStyle}>Severity</th>
            <th style={tableHeadStyle}>Date</th></tr>
        </thead>
          <tbody> {this.renderBodyMeasures()}</tbody>
      </Table>
        </div>
      }
      };

    function mapStateToProps(state){
      return{
        bodyMeasures: state.bodyMeasures.all,
        user: state.users.user,
        patient: state.patients.patient
        };
    }
    function mapDispatchToProps(dispatch) {
    return bindActionCreators({setActivePage: setActivePage, fetchBodyMeasures: fetchBodyMeasures}, dispatch);
    }
    export default connect(mapStateToProps, mapDispatchToProps)(BodyReport);

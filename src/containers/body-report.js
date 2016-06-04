import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchBodyMeasures } from '../actions/index';

export default class BodyReport extends Component {
    constructor(props){
      super(props);
      this.state = {isBodyMeasuresCalled: false};
    }
    componentWillMount() {
    };
    getBodyMeasures(){
      this.props.fetchBodyMeasures(this.props.patient[0]._id)
      console.log('trying to report on patient pain for patient ' + this.props.patient[0]._id+ ' ' + this.props.patient[0].firstName)
       this.setState({isBodyMeasuresCalled: true})
    };
    renderBodyMeasures() {
      return this.props.bodyMeasures.map((bodyMeasure) => {
        return (
        <li className="list-group-item" key={bodyMeasure.createdDate}>
          <span className="pull-xi-right">{bodyMeasure.measurement}</span>
          <strong>{bodyMeasure.measurementUnit}</strong>
        </li>);
      });
    }
    render() {
      if (!this.props.bodyMeasures[0] && !this.state.isBodyMeasuresCalled) {
        return <div>
        {console.log(this.state.isBodyMeasuresCalled)}
        <button onClick={() => this.getBodyMeasures()}> Generate Report </button>
        </div>
      }
       return <div>
       <button onClick={() => this.getBodyMeasures()}> Generate Report </button>
       {console.log(this.state.isBodyMeasuresCalled)}
        <ul className="list-group">
           {this.renderBodyMeasures()}
        </ul>
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
    return bindActionCreators({fetchBodyMeasures: fetchBodyMeasures}, dispatch);
    }
    export default connect(mapStateToProps, mapDispatchToProps)(BodyReport);

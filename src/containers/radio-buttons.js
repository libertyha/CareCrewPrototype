import React, {Component} from 'react';
import RadioItem from '../components/radioItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectPain} from '../actions/index';
import {selectSeverity} from '../actions/index';


export default class RadioButtons extends Component {
  constructor(props){
    super(props);
    this.state = {defaultPain:this.props.painList[0].name, //used to make first list option the default selected radio button
    defaultActivePain: this.props.painList[0],  //used to make first list option the default selected active pain option
    defaultSeverity:this.props.severityList[0].name,
    defaultActiveSeverity: this.props.severityList[0]
  };
  }
  getPainChoice(pain){
     this.props.selectPain(pain);
  };
  getSeverityChoice(severity){
      this.props.selectSeverity(severity);

  };

  componentWillMount(){
    this.props.selectPain(this.state.defaultActivePain);
      this.props.selectSeverity(this.state.defaultActiveSeverity);
  }
  render() {

       const painListRendered = this.props.painList.map((pain) => {
         var isChecked = pain.name === this.state.defaultPain;
         return <RadioItem itemToSelect = {pain.label} radioSelect = {() => this.getPainChoice(pain)} id = {pain.name} key = {pain.name} radioGroup = {pain.group} defaultChecked = {isChecked}/>
       });

       const severityListRendered = this.props.severityList.map((severity) => {
         var isChecked = severity.name === this.state.defaultSeverity;
         return <RadioItem itemToSelect = {<img src={severity.img}/>} radioSelect = {() => this.getSeverityChoice(severity)} id = {severity.name} key = {severity.name} radioGroup = {severity.group} defaultChecked = {isChecked}/>
       });

     if(!this.props.bodyPart){
       return <div></div> ;
     }
       return <div>
       <ul className="col-md-4 list-group">
         {painListRendered}
       </ul>
       <ul className="col-md-4 list-group">
         {severityListRendered}
       </ul>
       </div>
  }
}

function mapStateToProps(state){
  //These state.VALUES come in from ../reducers/index.js
  return{
      bodyPart: state.activeBodyPart,
      painList: state.painList,
      activePain: state.activePain,
      severityList: state.severityList,
      activeSeverity: state.activeSeverity
  };
}
//anything returned from this function will end up as props on the BodyLink container
function mapDispatchToProps(dispatch){
  //whenever selectBodyPart is called, the result should be passed to all of our reducers
  return bindActionCreators({selectPain: selectPain, selectSeverity: selectSeverity}, dispatch); //takes all actions and sends them to all reducers
  //this.props.selectBodyPart will call our action creator
  //selectBodyPart is a plain function that returns an object. The purpose of binding is to take selectBodyPart and give it to the reducers
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioButtons);
//connect takes a function and a component and produces a container. A container is a component aware of the state

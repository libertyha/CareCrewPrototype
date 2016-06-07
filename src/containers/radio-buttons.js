import React, {Component} from 'react';
import RadioItem from '../components/radioItem';
import ButtonGroupItem from '../components/buttonGroupItem';
import DropdownGroupItem from '../components/dropdownGroupItems';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectPain} from '../actions/index';
import {selectSeverity} from '../actions/index';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { DropdownToggle } from 'react-bootstrap';
import SubmitBody from '../containers/body-submit';

const BodyInputsStyle = {'float': 'left'};
const symptomDropdown = {'font-size':'x-large'};
export default class RadioButtons extends Component {
  constructor(props){
    super(props);
    this.state = {defaultPain:this.props.painList[0].name, //used to make first list option the default selected radio button
    defaultActivePain: this.props.painList[0],  //used to make first list option the default selected active pain option
    defaultSeverity:this.props.severityList[0].name,
    defaultActiveSeverity: this.props.severityList[0],
    selectedSeverity: 'Symptom'
  };
  }
  // getPainChoice(pain){
  //    this.props.selectPain(pain);
  // };
  getSeverityChoice(severity){
      this.props.selectSeverity(severity);
console.log('severity has been set');
  };

  componentWillMount(){
    this.props.selectPain(this.state.defaultActivePain);
      this.props.selectSeverity(this.state.defaultActiveSeverity);

  };

getPainChoice(severity){
  console.log(severity);
  console.log(this.state.selectedSeverity)
  this.setState({ selectedSeverity: severity.label });
  this.props.selectPain(severity);
}


  render() {
       const painDropDownRendered = this.props.painList.map((pain) => {
         return <MenuItem eventKey={pain} key = {pain.name}><h3>{pain.label}</h3></MenuItem>
       });
       const severityButtonsRendered = this.props.severityList.map((severity) => {
         return <ButtonGroupItem setValue = {() => this.getSeverityChoice(severity)} id = {severity.name} key = {severity.name} itemLabel = {severity.label} buttonClass = {severity.class}/>
       });

     if(!this.props.bodyPart){
       return <div></div> ;
     }
       return <div style = {BodyInputsStyle}>
          <h2>{this.props.bodyPart.label}</h2>

           <ButtonToolbar>
                <DropdownButton style={symptomDropdown} bsSize="large" onSelect = {this.getPainChoice.bind(this)} title={this.state.selectedSeverity} id="Symptom Type Dropdown">
                    {painDropDownRendered}
                </DropdownButton>
              </ButtonToolbar>
<br></br>

              <ButtonGroup vertical>
                    {severityButtonsRendered}
             </ButtonGroup>
    <br></br>         <br></br>
             <SubmitBody />
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

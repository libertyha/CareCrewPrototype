import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectBodyPart} from '../actions/index';

class BodyLink extends Component {
  constructor(props){
    super(props);
    this.state = {selectedPartID: 'none'};
  }
renderBody() {
  return this.props.bodyParts.map((bodyPart) => {
      return (<path id={bodyPart.id} className={this.state.selectedPartID === bodyPart.id ? 'body-part-selected' : bodyPart.id} key={bodyPart.id} onClick={() => this.getSelectedPart(bodyPart)} d={bodyPart.dVal}/>);
  });
}
getSelectedPart(part){
  this.props.selectBodyPart(part);
  this.setState({selectedPartID: part.id})
}

render(){
  return(
    <div id="manContainer">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="449px" height="848px" viewBox="75.14 -3.555 449 848" >
        <title>bodyImage</title>
       {this.renderBody()}
      </svg>
    </div>
  )
}
}
function mapStateToProps(state){
  //Whatever is returned will show up as props inside of bodyTracker, glue between react and redux
  return{
    bodyParts: state.bodyParts
  };
}

//anything returned from this function will end up as props on the BodyLink container
function mapDispatchToProps(dispatch){
  //whenever selectBodyPart is called, the result should be passed to all of our reducers
  return bindActionCreators({selectBodyPart: selectBodyPart}, dispatch); //takes all actions and sends them to all reducers
  //this.props.selectBodyPart will call our action creator
  //selectBodyPart is a plain function that returns an object. The purpose of binding is to take selectBodyPart and give it to the reducers
}

//promote BodyLink from a component to a container, needs to know about this dispatch method, select body part. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BodyLink);
//connect takes a function and a component and produces a container. A container is a component aware of the state

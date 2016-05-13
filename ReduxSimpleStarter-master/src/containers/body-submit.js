import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class BodySubmit extends Component {
  constructor(props){
    super(props);
    this.state = {submitBodyPart:"none", //used to make first list option the default selected radio button
    submitPainType: "none",  //used to make first list option the default selected active pain option
    submitSeverity: "none", //used to make first list option the default selected radio button
    submitClicked: false
  };
}
onClickSubmit(){
   this.setState({submitBodyPart: this.props.bodyPart.id})
   this.setState({submitPainType: this.props.activePain.name})
   this.setState({submitSeverity: this.props.activeSeverity.name})
   this.setState({submitClicked: true})
};
onClickReset(){
   this.setState({submitBodyPart: "none"})
   this.setState({submitPainType: "none"})
   this.setState({submitSeverity: "none"})
   this.setState({submitClicked: false})
};

  render() {
    if(!this.props.bodyPart){
      return <div></div> ;
    }
    if(!this.state.submitClicked){
      return  <button onClick={() => this.onClickSubmit()}> Submit Here </button>
    }
    return (
      <div>

         <h3> Things to submit to server:</h3>
         <ul><li>{this.state.submitBodyPart}</li>
         <li>{this.state.submitPainType}</li>
         <li>{this.state.submitSeverity}</li></ul>
         <button onClick={() => this.onClickReset()}> Reset </button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    bodyPart: state.activeBodyPart,
    activePain: state.activePain,
    activeSeverity: state.activeSeverity
    };
}

export default connect(mapStateToProps)(BodySubmit);

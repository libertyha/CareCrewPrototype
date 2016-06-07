import React, {Component} from 'react';
import {connect} from 'react-redux';
import request from 'superagent';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { createSymptomInstance } from '../actions/index';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';




export default class BodySubmit extends Component {
  constructor(props){
    super(props);
    this.state = {submitBodyPart:"none", //used to make first list option the default selected radio button
    submitPainType: "none",  //used to make first list option the default selected active pain option
    patientName: "none",
    submitSeverity: "none", //used to make first list option the default selected radio button
    submitClicked: false
  };}
  componentWillMount() {
  };

  closeModal() {
    this.setState({ showModal: false });
  };

  openModal() {


   this.setState({showModal: true });
   this.setState({submitBodyPart: this.props.bodyPart.label})
   this.setState({submitPainType: this.props.activePain.label})
   this.setState({submitSeverity: this.props.activeSeverity.name})
   this.setState({patientName: this.props.patient[0].firstName})
  };

onClickSubmit(){
   this.setState({submitClicked: true})
   this.insertTrackData()
   this.closeModal()
};
insertTrackData(){
  var body = {
          bodyPart: this.props.bodyPart.label,
          measurementUnit: this.props.activePain.label,
          measurement: this.props.activeSeverity.name,
          patientId: this.props.patient[0]._id,
          userIds: this.props.user[0]._id
      };

  request
      .post('http://carecrewhq.herokuapp.com/careCrew/healthMeasures')
      .accept("application/json")
      .set("Content-Type", "application/json")
    //  .send(body)
    .send(JSON.stringify(body,null,"   "))
          .end(function(err, res){
              if (err || !res.ok) {
              alert('Error, submission was not successful');
                  alert(JSON.stringify(body, null, "   "));
              } else {
                //  alert('Successful submission ' + JSON.stringify(res.body));
              }
        })
}


  render() {

    if(!this.props.bodyPart){
      return <div> </div> ;
    }
    return <div>


    <Button bsStyle="primary" bsSize="large" onClick={() => this.openModal()}>Submit</Button>

        <Modal show={this.state.showModal} onHide={() => this.closeModal()}>
          <Modal.Header >
          <Modal.Title>Please confirm that you wish to submit the following:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <hr />
            <p>{this.state.patientName} has <b>{this.state.submitPainType}</b>, located on the <b>{this.state.submitBodyPart}</b>.
            The severity of the <b>{this.state.submitPainType}</b> is <b>{this.state.submitSeverity}</b></p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.onClickSubmit()}>Confirm</Button>
              <Button onClick={() => this.closeModal()}>Cancel</Button>
          </Modal.Footer>
        </Modal>





      </div>


  }
}

function mapStateToProps(state){
  return{
    patient: state.patients.patient,
    bodyPart: state.activeBodyPart,
    activePain: state.activePain,
    activeSeverity: state.activeSeverity,
    posts:  state.posts.all,
    user: state.users.user
    };
}
function mapDispatchToProps(dispatch) {
return bindActionCreators({ createSymptomInstance }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BodySubmit);

//export default reduxForm({form: "PostsNewForm", fields: ['title', 'categories', 'content']
//}, mapStateToProps, mapDispatchToProps)(PostsNew);

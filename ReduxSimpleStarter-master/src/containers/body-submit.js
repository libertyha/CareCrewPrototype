import React, {Component} from 'react';
import {connect} from 'react-redux';
import request from 'superagent';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { createSymptomInstance } from '../actions/index';

export default class BodySubmit extends Component {
  constructor(props){
    super(props);
    this.state = {submitBodyPart:"none", //used to make first list option the default selected radio button
    submitPainType: "none",  //used to make first list option the default selected active pain option
    submitSeverity: "none", //used to make first list option the default selected radio button
    submitClicked: false
  };}
  componentWillMount() {
    console.log('This would be a good time to call an action creator to fetch posts');

  };


onClickSubmit(){
   this.setState({submitBodyPart: this.props.bodyPart.id})
   this.setState({submitPainType: this.props.activePain.name})
   this.setState({submitSeverity: this.props.activeSeverity.name})
   this.setState({submitClicked: true})
   this.postTrackData()
};
postTrackData(){
       request
           .post('http://carecrewhq.herokuapp.com/careCrew/users')
           .accept("application/json")
           .set("Content-Type", "application/json")
          // .send(JSON.stringify(body, null, "   "))

           .send('{"firstName":"DannyReq",' +
               '"lastName":"LastReq",' +
               '"email":"req@somereq.com",' +
               '"address":"123 Main St"' +
               '}')

           .end(function(err, res){
               if (err || !res.ok) {
               alert('Oh no! error');
                   alert(body.firstName);
                   alert(JSON.stringify(body, null, "   "));
               } else {
                   alert('yay got ' + JSON.stringify(res.body));
               }
         })
};
onClickReset(){
   this.setState({submitBodyPart: "none"})
   this.setState({submitPainType: "none"})
   this.setState({submitSeverity: "none"})
   this.setState({submitClicked: false})
};
renderPosts() {
  return this.props.posts.map((post) => {
    return (
      <li className="list-group-item" key={post.createdDate}>
        <span className="pull-xi-right">{post.measurement}</span>
        <strong>{post.measurementUnit}</strong>
      </li>);});}

  render() {
    if(!this.props.bodyPart){
      return <div><div>List of blog posts</div>
      <ul className="list-group">
         {this.renderPosts()}
      </ul>

      </div> ;
    }
    if(!this.state.submitClicked){
      return  <button onClick={() => this.onClickSubmit()}> Submit Here </button>
    }

    const body = {
        firstName: "DannyTest77",
        lastName: "LastTest77",
        email: "d77@test.com",
        address: "77 test st",
    };

    return <div>
                    <h3> Things to submit to server:</h3>
                    <ul><li>{this.state.submitBodyPart}</li>
                    <li>{this.state.submitPainType}</li>
                    <li>{this.state.submitSeverity}</li></ul>
                    <button onClick={() => this.onClickReset()}> Reset </button>
                 </div>

  }
}

function mapStateToProps(state){
  return{
    bodyPart: state.activeBodyPart,
    activePain: state.activePain,
    activeSeverity: state.activeSeverity,
    posts:  state.posts.all
    };
}
function mapDispatchToProps(dispatch) {
return bindActionCreators({ createSymptomInstance }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BodySubmit);

//export default reduxForm({form: "PostsNewForm", fields: ['title', 'categories', 'content']
//}, mapStateToProps, mapDispatchToProps)(PostsNew);

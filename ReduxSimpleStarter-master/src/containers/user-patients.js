import React, {Component} from 'react';
import { fetchCareClients } from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export default class UserPatients extends Component {
  componentWillMount() {
    console.log('Here she blows');
    this.props.fetchCareClients();
  };
  goToPatient(thisID){

    console.log('you clicked a patient');
    console.log(thisID);
  }
renderPosts() {
  return this.props.posts.map((post) => {
    return (
      <li className="list-group-item" onClick={() => this.goToPatient(post._id)}  key={post._id}>




        <span className="pull-xi-right">{post.firstName}</span>
        <strong>{post.lastName}</strong>
      </li>);});}


    render() {
       return <div>
        <ul className="list-group">
           {this.renderPosts()}
        </ul>

        </div>
      }
      };

    function mapStateToProps(state){
      return{
        posts:  state.posts.all
        };
    }
    function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCareClients }, dispatch);
    }
    export default connect(mapStateToProps, mapDispatchToProps)(UserPatients);

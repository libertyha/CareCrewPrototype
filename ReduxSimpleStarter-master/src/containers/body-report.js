import React, {Component} from 'react';
import { fetchPosts } from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export default class BodyReport extends Component {
  componentWillMount() {
    console.log('Here she blows');
    this.props.fetchPosts();
  };
renderPosts() {
  return this.props.posts.map((post) => {
    return (
      <li className="list-group-item" key={post.createdDate}>
        <span className="pull-xi-right">{post.measurement}</span>
        <strong>{post.measurementUnit}</strong>
      </li>);});}

    render() {
      if (!this.props.posts) {
  return <div>Loading…</div>;}

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
    return bindActionCreators({ fetchPosts }, dispatch);
    }
    export default connect(mapStateToProps, mapDispatchToProps)(BodyReport);

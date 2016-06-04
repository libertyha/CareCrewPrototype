import React from 'react';
import { Component } from 'react';
import RadioItem from './radioItem';
import BodyLink from '../containers/body-link';
import RadioButtons from '../containers/radio-buttons';
import SubmitBody from '../containers/body-submit';
import Header from '../containers/header';
import PageNameBar from '../containers/page-name-bar';


export default class App extends Component {
  render() {
    return (
      <div>
      <Header  />
      <PageNameBar />
      {this.props.children}
      </div> //<img src={'http://www.clker.com/cliparts/P/Q/t/5/E/r/white-stick-figure.svg'} alt="human figure">

    );
  }
}

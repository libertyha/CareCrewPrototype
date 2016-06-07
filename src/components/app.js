import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';
import Footer from '../containers/footer';
import PageNameBar from '../containers/page-name-bar';


export default class App extends Component {
  render() {
    return (
      <div>
      <Header  />
      <PageNameBar />
      {this.props.children}
        <Footer  />
      </div> //<img src={'http://www.clker.com/cliparts/P/Q/t/5/E/r/white-stick-figure.svg'} alt="human figure">

    );
  }
}

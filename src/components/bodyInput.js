import React from 'react';
import { Component } from 'react';
import RadioItem from './radioItem';
import BodyLink from '../containers/body-link';
import RadioButtons from '../containers/radio-buttons';
import SubmitBody from '../containers/body-submit';
import { setActivePage } from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BodyInput extends Component {
  componentWillMount() {
      this.props.setActivePage("Add a symptom");
  };
  render() {
    return (
      <div>
        <BodyLink />
        <RadioButtons />
      </div> //<img src={'http://www.clker.com/cliparts/P/Q/t/5/E/r/white-stick-figure.svg'} alt="human figure">

    );
  }
}
function mapDispatchToProps(dispatch) {
return bindActionCreators({setActivePage: setActivePage}, dispatch);
}
export default connect(null, mapDispatchToProps)(BodyInput);

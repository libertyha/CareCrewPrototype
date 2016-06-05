import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { Button } from 'react-bootstrap';
import {generateDemo} from '../actions/index';
import { bindActionCreators } from 'redux';
import {setFamily} from '../actions/index';
import {setCaretaker} from '../actions/index';



export default class Header extends Component {
  generateUsers() {
    this.props.generateDemo()
    .then(() => {
      console.log(this.props.demoObject.familyId);  })
}
  render() {
  return <div>
  <Link  to="/startDemo">
        <Button onClick={() => this.generateUsers()} bsStyle ="primary" bsSize="large" block>Start the Care Crew Demo (caretaker)</Button>
  </Link>


    </div>
}
}
function mapStateToProps(state){
  return{
    demoObject: state.demoObject.all,

    };
}
function mapDispatchToProps(dispatch) {
return bindActionCreators({ generateDemo: generateDemo, setFamily: setFamily, setCaretaker: setCaretaker}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

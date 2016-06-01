import React from 'react';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUser } from '../actions/index';
import { fetchUsers } from '../actions/index';
const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

export default class DemoStart extends Component {
  onUserSelect(id) {
    console.log('get user Name using' + id);
    this.props.fetchUser(id);
    this.props.fetchUsers();
  };

  render() {
    if (!this.props.user) {
    return (
      <div className="Well" style={wellStyles}>
    <ul>
               <Link  to="/myPatients">
    <Button onClick={() => this.onUserSelect('574ceec10a6a781a00ffc857')} bsStyle ="primary" bsSize="large" block>I am Gloria (caretaker)</Button>
</Link>
<br></br>
 <Link  to="/SymptomTracker">
    <Button onClick={() => this.onUserSelect('574ceeaa0a6a781a00ffc856')} bsStyle ="primary" bsSize="large" block>I am Ross (family member)</Button>
</Link>

<Button onClick={() => this.onUserSelect('574ceec10a6a781a00ffc857')} bsStyle ="primary" bsSize="large" block>Test (caretaker)</Button>


    </ul>
      </div> //<img src={'http://www.clker.com/cliparts/P/Q/t/5/E/r/white-stick-figure.svg'} alt="human figure">

    );
    }
    return(
      <div> Should work {console.log(this.props.user[0].firstName)}</div>
    )
  }
}
function mapStateToProps(state){
  return{
      users: state.users.all,
      user: state.users.user
    };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser: fetchUser, fetchUsers: fetchUsers}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DemoStart);

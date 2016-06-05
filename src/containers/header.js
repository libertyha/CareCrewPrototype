import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

const headerContainer = {'height': '150px', 'backgroundColor': '#FFFFFF'};
const headerTop = {'position':'relative', 'width':'100%', 'height': '100px'};
const headerLogo = {'float': 'left','display': 'inline-block', 'height': '100%'};
const headerUserName = {'display': 'inline-block', 'float': 'left','position': 'relative', 'top': '30%'};
const headerLogOut = {'float': 'right','display': 'inline-block','position': 'relative', 'top': '30%'};
const headerBottom = {'width': '100%', 'clear': 'left'};
const headerDate = {'float': 'left'};
const headerPatientName = {'float': 'right'};
;
var d = new Date();
var wIndex = d.getUTCDay();
var day = d.getUTCDate();
var mIndex = d.getUTCMonth();
var year = d.getUTCFullYear();

var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var monthString = month[mIndex];//Will give you the desired month
var weekDay = week[wIndex];



export default class Header extends Component {


  render() {
if(!this.props.user){
  return <div style={headerContainer}>
            <div style={headerTop}>
              <img style={headerLogo} src={require('../img/CareCrewLogo_130sq.png')}/>
              <div style={headerLogOut}><Link  to="/startDemo"> <h4> Log out</h4></Link></div>
            </div>
            <div style={headerBottom}>
              <div style = {headerDate}><h3>{weekDay}, {day} {monthString} {year}</h3></div>
            </div>
          </div>
}
if(!this.props.patient){
  return <div style={headerContainer}>
            <div style={headerTop}>
              <img style={headerLogo} src={require('../img/CareCrewLogo_130sq.png')}/>
              <div style ={headerUserName} ><h3> {this.props.user[0].firstName} </h3></div>
              <div style={headerLogOut}><Link  to="/startDemo"> <h4> Log out</h4></Link></div>
            </div>
            <div style={headerBottom}>
              <div style = {headerDate}><h3>{weekDay}, {day} {monthString} {year}</h3></div>
            </div>
          </div>
}
return <div style={headerContainer}>
          <div style={headerTop}>
            <img style={headerLogo} src={require('../img/CareCrewLogo_130sq.png')}/>
            <div style ={headerUserName} ><h3>{this.props.user[0].firstName} </h3></div>
            <div style={headerLogOut}><Link  to="/startDemo"> <h4> Log out</h4></Link></div>
          </div>
          <div style={headerBottom}>
            <div style = {headerDate}><h3>{weekDay}, {day} {monthString} {year}</h3></div>
            <div style = {headerPatientName}><h3> Care client: {this.props.patient[0].firstName} {this.props.patient[0].lastName} </h3></div>
          </div>
        </div>


}
}
function mapStateToProps(state){
  return{
    user: state.users.user,
    patient: state.patients.patient
    };
}
export default connect(mapStateToProps)(Header);

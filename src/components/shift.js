import React, { Component } from 'react';
import PatientProfile from './patient_profile';
import ShiftTaskListAndNotifications from './shift_tasklist_and_notifications';


export default class Shift extends Component {
  render() {
    console.log("inside Shift component");
    console.log("this.props");
    console.log(this.props);

    // var myInitialValues = {
    //   notifications: [ { id: 1,
    //     description: 'This is a description',
    //     date_created:  'May 25, 2016',
    //     owner:  'Linda'
    //   }],
    //   tasks: [ { id: 1,
    //     description: 'This is a description',
    //     date_scheduled:  'May 25, 2016',
    //     owner:  'Linda',
    //     completed: false
    //   }]
    // };

    // <ShiftTaskListAndNotifications initialValues={myInitialValues}/>

    return (
      <div>
        <strong>Shift page</strong>
        <PatientProfile />
        <ShiftTaskListAndNotifications  />
      </div>
    );
  }
}

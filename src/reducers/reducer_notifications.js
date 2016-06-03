import { FETCH_NOTIFICATIONS } from '../actions/index';

  var INITIAL_STATE = { form: {}, shift: {} };

  //  we need this format for code to work

  var request = {};


  request["tasks"] =
  [
    {id: '0', description: 'description of task 0', date_scheduled: 'May 23, 2016 11:00am', owner: 'Linda', completed: false},
    {id: '1', description: 'description of task 1', date_scheduled: 'May 23, 2016 3:00pm', owner: 'Linda', completed: false}
  ];

  // request["notifications"] =
  // [
  //   {id: '0', description: 'Rose fell in the kitchen', date_created: 'May 23, 2016 11:00am', owner: 'Linda'},
  //   {id: '1', description: 'Rose did not like the soup at lunch', date_created: 'May 23, 2016 3:00pm', owner: 'Linda'}
  // ];

export default function(state = INITIAL_STATE, action) {


  switch(action.type) {
  case FETCH_NOTIFICATIONS:

    // return { ...state, all: action.payload };
    console.log("inside reducer_notifications");

    var patientsNotifications = [];
    patientsNotifications = action.payload.data.map(function(notification) {
        return (
          { id: notification._id,
            description: notification.message,
            date_created: notification.createdDate,
            owner: 'Linda'
          }
        );
    });

    request["notifications"] = patientsNotifications;

    return { form: state.form, shift: request, progressnotes: state.progressnotes };


  default:
    return state;
  }
}

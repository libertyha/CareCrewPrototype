import { FETCH_TASKS } from '../actions/index';

  var INITIAL_STATE = { form: {}, shift: {} };

  // INITIAL_STATE.shift = {};

  // INITIAL_STATE.shift.form = {};

  // INITIAL_STATE.shift.form.ShiftTaskListAndNotificationsForm = {};

  // INITIAL_STATE.shift.form.ShiftTaskListAndNotificationsForm["tasks"] = [];

  // INITIAL_STATE.shift.form.ShiftTaskListAndNotificationsForm["notifications"] = [];

  // INITIAL_STATE.form = {};

// state === {
//  form: {
//    ShiftTaskListAndNotificationsForm: {
//      tasks: [
//        { id: 1,
//          description: 'a description',
//          date_scheduled: 05-26-2016,
//          owner: 'Linda',
//          complete: false,
//          shortDesc: 'a short description'
//        }
//      ],
//      notifications: [
//        { id: 1,
//          description: 'b description',
//          date_created: 05-26-2016,
//          owner:  'Linda'
//        }
//      ]
//    }
//  }
// }

  //   All Tasks for one patient from  http://carecrewhq.herokuapp.com/careCrew
  // [
  //   {
  //     "_id": "574b99919ef2e61a00a3a7b0",
  //     "shortDesc": "Lunch - Soups",
  //     "description": "Lunch - Soups (because of dentures)",
  //     "patientId": "574248c15417d00300d15d84",
  //     "__v": 0,
  //     "updatedDate": "2016-05-30T01:38:25.753Z",
  //     "createdDate": "2016-05-30T01:38:25.753Z",
  //     "status": "new",
  //     "tags": []
  //   },
  //   {
  //     "_id": "574b9a0e9ef2e61a00a3a7b1",
  //     "patientId": "574248c15417d00300d15d84",
  //     "shortDesc": "Supplies - prescriptions are running out. need refill",
  //     "description": "Supplies - prescriptions",
  //     "__v": 0,
  //     "updatedDate": "2016-05-30T01:40:30.183Z",
  //     "createdDate": "2016-05-30T01:40:30.183Z",
  //     "status": "new",
  //     "tags": []
  //   }
  // ]


  //  we need this format for code to work

  var request = {};

  //
  // request["tasks"] =
  // [
  //   {id: '0', description: 'description of task 0', date_scheduled: 'May 23, 2016 11:00am', owner: 'Linda', completed: false},
  //   {id: '1', description: 'description of task 1', date_scheduled: 'May 23, 2016 3:00pm', owner: 'Linda', completed: false}
  // ];

  request["notifications"] =
  [
    {id: '0', description: 'Rose fell in the kitchen', date_created: 'May 23, 2016 11:00am', owner: 'John'},
    {id: '1', description: 'Rose did not like the soup at lunch', date_created: 'May 23, 2016 3:00pm', owner: 'Ringo'}
  ];

export default function(state = INITIAL_STATE, action) {


  switch(action.type) {
  case FETCH_TASKS:

    // return { ...state, all: action.payload };
    console.log("inside reducer_shift");

    // this.props.books.shift.form.ShiftTaskListAndNotificationsForm.notifications;
    // return { books: action.payload.form };
    // return { ...state, shift: action.payload };

    var patientsTasks = [];
    patientsTasks = action.payload.data.map(function(task) {
        return (
          { id: task._id,
            description: task.description,
            shortDesc: task.shortDesc,
            date_created: 'May 23, 2016',
            updatedDate: task.updatedDate,
            owner: 'Paul',
            completed: (task.status === 'completed') ? true : false
          }
        );
    });

    request["tasks"] = patientsTasks;

    //return { form: state.form, shift: action.payload }
    // return { form: state.form, shift: request };
    return { form: state.form, shift: request, progressnotes: state.progressnotes };


  default:
    return state;
  }
}

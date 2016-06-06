import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { setActivePage } from '../actions/index';

import { reduxForm, addArrayValue } from 'redux-form';
import { reducer as formReducer } from 'redux-form';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { submitTasks } from '../actions/index';
import { submitProgressNote } from '../actions/index';

import { fetchTasks } from '../actions/index';
import { fetchNotifications } from '../actions/index';
import { fetchProgressNotes } from '../actions/index';
import { incrDecrShiftSubmitRequestCount } from '../actions/index';
import { addProgressNoteToGlobalState } from '../actions/index';
import PureInput from './PureInput';
import PureTextarea from './PureTextarea';

export const fields = [
  'tasks[].id',
  'tasks[].description',
  'tasks[].date_scheduled',
  'tasks[].owner',
  'tasks[].completed',
  'tasks[].shortDesc',
  'tasks[].updatedDate',
  'progress_note.id',
  'progress_note.description',
  'progress_note.updateDate',
  'progress_note.creatorId',
  'progress_note.patientId',
  'progress_note.photo',
  'progress_note.video',
  'notifications[].id',
  'notifications[].description',
  'notifications[].date_created',
  'notifications[].owner'
]


class ShiftTaskListAndNotifications extends Component {
  constructor(props) {
    super(props);
  this.props.setActivePage("Care Checklist");
    // this.renderTasks = this.renderTasks.bind(this);

  }

  // React calls this automatically
  //   whenever this component is about to render for the first time
  componentWillMount() {
    console.log("inside componentWillMount()");
    //this.props.fetchTasks(this.props.patientId);
    //this.props.fetchNotifications();
    //this.props.fetchProgressNotes(this.props.patientId);
  }

  // ===============================================================
  // == onAddProgressNote
  // ===============================================================
  onAddProgressNote(event) {

    console.log("inside onAddProgressNote()");
    event.preventDefault()  // prevent form submission
    var text = this.props.fields.progress_note.description.value;
    var date = new Date();

    var progressNote =
      {
         id: null,
         description: text,
         updatedDate: date,
         creatorId: this.props.user[0]._id,
         patientId: this.props.patient[0]._id,
         photo: null,
         video: null,
         dirty: true
      };

    console.log('this.props.user');
    console.log(this.props.user);
    console.log('this.props.patient');
    console.log(this.props.patient);

    this.props.addProgressNoteToGlobalState(progressNote);
    this.props.clearAddProgressNotesField();

  }

  // ===============================================================
  //   onTaskButtonClick
  // ===============================================================
  onTaskButtonClick(event) {
     event.preventDefault()  // prevent form submission

     // get index from event target
     // get long description from associated fields.tasks[n]
     // use long description in the alert
     var index = parseInt(event.currentTarget.id, 10);

     var task =  this.props.fields.tasks[index];

     var msg = task.description.value + ' Posted: ' + task.updatedDate.value;

     // alert("Task details coming soon... ");
     alert(msg);

  }

  // ===============================================================
  // == onVitalSignsClick
  // ===============================================================
  onVitalSignsClick(event) {
     event.preventDefault()  // prevent form submission
     alert("Vital Signs coming soon... ");

  }

  // ===============================================================
  // == onAddVideoClick
  // ===============================================================
  onAddVideoClick(event) {
     event.preventDefault()  // prevent form submission
     alert("Video upload coming soon... ");
  }

  // ===============================================================
  // == onAddPhotoClick
  // ===============================================================
  onAddPhotoClick(event) {
     event.preventDefault()  // prevent form submission
     alert("Photo upload coming soon... ");
  }

  // ===============================================================
  // == onSubmit
  // ===============================================================
   onSubmit(props) {
    console.log('inside onSubmit()');
    console.log('props');
    console.log(props);

    console.log('this.props');
    console.log(this.props);

    var self = this;

    // iterate thru array
    this.props.fields.tasks.forEach(function(task) {
      if (task.completed.dirty === true) {
        var tempTask = {};

        tempTask._id = task.id.value;
        tempTask.status = task.completed.value ? 'completed' : 'new';

        console.log('self.props.shiftSubmitRequestCount');
        console.log(self.props.shiftSubmitRequestCount);

        self.props.incrDecrShiftSubmitRequestCount(1);

        self.props.submitTasks(tempTask)
          .then((data) => {
            console.log('submitTasks() has finished');
            console.log('data');
            console.log(data);
            self.props.incrDecrShiftSubmitRequestCount(-1);

            // if all tasks are updated, take focus off Submit button somehow
            // ... display update complete message
          });

      }
    });

    // iterate thru progress notes list
    // ... send request to server
    // ... for each progress note that has "dirty" == true
    this.props.progress_notes.forEach(function(progress_note) {

      if (progress_note.dirty) {

        console.log('self.props.shiftSubmitRequestCount');
        console.log(self.props.shiftSubmitRequestCount);

        self.props.incrDecrShiftSubmitRequestCount(1);

        self.props.submitProgressNote(progress_note)
        .then((data) => {
            console.log('submitProgressNotes() has finished');
            console.log('data');
            console.log(data);
            self.props.incrDecrShiftSubmitRequestCount(-1);

            // if all tasks are updated, take focus off Submit button somehow
            // ... display update complete message
          });
        progress_note.dirty = false;
      }

    });

   }

  // ===============================================================
  //   renderNotifications
  // ===============================================================

  renderNotifications(notifications) {
    console.log("inside renderNotifications()");

    console.log("this.props.shiftSubmitRequestCount");
    console.log(this.props.shiftSubmitRequestCount);

    if (notifications.length === 0) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    //  defaultValue={this.props.books.shift.all.notifications[index].description} />
    //               {notification.date_created} {notification.owner}

    // var temp = notifications.map(function(notification, index) {
    //   return (
    //     <div key={index}>
    //       <label>
    //         <input
    //            className="shift-notification"
    //            disabled
    //            type="text"
    //            {...notification.description}
    //            defaultValue={'This is the first description'}
    //            />
    //          May 25, 2016  Linda
    //       </label>
    //     </div>
    //   );
    // });

    var temp = notifications.map(function(notification, index) {
      return (
           <div key={index}>
            <div>
              <label>Notice  <PureInput type="text" placeholder="description" className="notification-class" field={notification.description} /> {notification.date_created.value} {notification.owner.value}
              </label>
            </div>
          </div>
      );
    });

    // var temp = notifications.map(function(notification, index) {
    //    console.log("inside temp = notiications.map()");
    //    console.log('notification');
    //    console.log(notification);
    //    console.log('index');
    //    console.log(index);
    //    return (
    //         <div key={index + 1}>
    //         <div>
    //           <label>Id {index + 1}</label>
    //           <div>
    //             <PureInput type="text" placeholder="id" field={notification.id} />
    //           </div>
    //         </div>
    //         <div>
    //           <label>Description</label>
    //           <div>
    //             <PureInput type="text" placeholder="description" field={notification.description} />
    //           </div>
    //         </div>
    //         <div>
    //           <label>Date Created</label>
    //           <div>
    //             <PureInput type="text" placeholder="date created" field={notification.date_created} />
    //           </div>
    //         </div>
    //         <div>
    //           <label>Owner</label>
    //           <div>
    //             <PureInput type="text" placeholder="owner" field={notification.owner} />
    //           </div>
    //         </div>
    //        </div>
    //    );
    // });

    return temp;

  }


  // ===============================================================
  // == renderTasks
  // ===============================================================
  renderTasks(tasks) {
    console.log("inside renderTask()");
    //   console.log(this.props.user[0].firstName);
    //     console.log(this.props.user);
    if (tasks.length === 0){
      return (
        <div>
          Loading...
        </div>
      );
    }

    //  THIS COMMENTED OUT CODE WAS WORKING

    // var temp = tasks.map((task) => {
    //   console.log("task");
    //   console.log(task);
    //   return (
    //     <div key={task.id}>
    //       <label>
    //         <input  type="checkbox" {...task} /> {task.shortDesc} {task.date_scheduled} {task.owner}
    //       </label>
    //     </div>
    //   );
    // });

    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var userName = this.props.user[0].firstName;
    var d1s = monthNames[monthIndex] + ' ' + day + ' ' + year;

    var self = this;

    var temp = tasks.map((task, index) => {
      return (
           <div key={index} className="list-group-item my-list-group-item">
            <div className="task-div">
              <label>
                  <PureInput type="checkbox"  field={task.completed} /> {task.shortDesc.value} {(task.completed.value === true) ? '  -  ' + userName + '  -   ' + d1s : ''}
              </label> <span className="task-button-right"><Button id={index} className="badge task-button-right" onClick={this.onTaskButtonClick.bind(this)}> <i/>details...</Button></span>

            </div>
          </div>
      );
    });

    return temp;
  }

  // ===============================================================
  // == renderProgressNotes
  // ===============================================================
  renderProgressNotes(progress_notes) {

    console.log("inside renderProgressNotes");

    if (progress_notes.length === 0){
      return (
        <div>
          Loading...
        </div>
      );
    }

    // {id: '1',
    //  description: 'Previous progress note from a previous shift. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
    //  updatedDate: 'May 24, 2016 11:00am',
    //  creatorId: 'Phyliss',
    //  photo: null,
    //  video: null
    // }


    var temp = progress_notes.map(function(progress_note, index) {
      return (
           <div key={index} className="list-group-item">

              <li> {progress_note.description}
              </li>

          </div>
      );
    });

   return temp;

  }

  // ===============================================================
  // == render
  // ===============================================================
  render() {

    // state === {
    //  form: {
    //    ShiftTaskListAndNotificationsForm: {
    //      tasks: [
    //        { id: 1,
    //          description: 'a description',
    //          shortDesc: 'a short description',
    //          date_scheduled: 05-26-2016,
    //          updatedDate: 05-26-2016,
    //          owner: 'Linda',
    //          complete: false
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

   const {
      addValue,
      fields: { tasks, notifications, progress_notes },
      handleSubmit,
      resetForm,
      submittingCount,
      ...rest
    } = this.props

   console.log("inside render()");

   console.log('this.props.shiftSubmitRequestCount');
   console.log(this.props.shiftSubmitRequestCount);

   // this code causess Warnings

   if (this.props.fields.notifications.length === 0 &&
       this.props.notifications &&
       this.props.notifications.length > 0) {
     for (let childIndex = 0; childIndex < this.props.notifications.length; childIndex++) {
          // addValue('ShiftTaskListAndNotificationsForm', 'notifications')

          notifications.addField(this.props.notifications[childIndex]);
          // notifications.addField({     // pushes child field with initial values onto the end of the array
          //     id: `${childIndex}`,
          //     description: 'This is a description',
          //     date_created: 'May 25, 2016',
          //     owner: 'Linda'
          //   });
      }
   }

   if (this.props.fields.tasks.length === 0 &&
       this.props.books &&
       this.props.books.tasks &&
       this.props.books.tasks.length > 0) {
     for (let childIndex = 0; childIndex < this.props.books.tasks.length; childIndex++) {
          // addValue('ShiftTaskListAndNotificationsForm', 'tasks')

          tasks.addField(this.props.books.tasks[childIndex]);
          // tasks.addField({     // pushes child field with initial values onto the end of the array
          //     id: `${childIndex}`,
          //     description: 'This is a task description',
          //     shortDesc: 'This is a short description',
          //     date_scheduled: 'May 25, 2016',
          //     updatedDate: 'May 30, 2016,'
          //     owner: 'Linda',
          //     completed: false
          //   });
      }
   }

    return (
      <form className="form-class" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <p><Link to="/options">
              <Button type="button" className="btn">Back to Options</Button>
          </Link></p>
        {this.renderTasks(this.props.fields.tasks ? this.props.fields.tasks : [], this.onTaskButtonClick)}

        <div className="vital-signs-div">
          <div className="vital-signs-label">Vital Signs and other measurements</div>
            <ButtonToolbar>
              <ButtonGroup>
                <Button onClick={this.onVitalSignsClick.bind(this)} >
                  heart rate
                </Button>
                <Button onClick={this.onVitalSignsClick.bind(this)} >
                  blood pressure
                </Button>
                <Button onClick={this.onVitalSignsClick.bind(this)} >
                  glucose
                </Button>
                <Button onClick={this.onVitalSignsClick.bind(this)} >
                  weight
                </Button>
                <Button onClick={this.onVitalSignsClick.bind(this)} >
                  other vital signs
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
        </div>

        <h3>Progress Notes section</h3>
          <ul className="progress-notes-list">
             {this.renderProgressNotes(this.props.progress_notes)}
          </ul>
           <div className="progress_note_outer_div">

             <div className="progress_note_inner_div">

                 <ButtonToolbar>
                  <ButtonGroup>
                    <Button onClick={this.onAddPhotoClick.bind(this)}>Add Photo</Button>
                    <Button onClick={this.onAddVideoClick.bind(this)}>Add Video</Button>
                  </ButtonGroup>
                </ButtonToolbar>

                <PureTextarea className="add-progress-note-body" defaultValue="Enter progress note here." field={this.props.fields.progress_note.description} />

                 <ButtonToolbar>
                  <ButtonGroup>
                    <Button onClick={this.onAddProgressNote.bind(this)}>+</Button>
                  </ButtonGroup>
                </ButtonToolbar>

            </div>
          </div>



        { /* this.renderNotifications(this.props.fields.notifications ? this.props.fields.notifications : [])  */}

        <button type="submit" className="btn btn-primary" disabled={ this.props.shiftSubmitRequestCount }>
            {this.props.shiftSubmitRequestCount ? <i/> : ''} Submit
        </button>
        <button type="button" onClick={resetForm} className="btn">
            Clear Values
        </button>
        { this.props.shiftSubmitRequestCount ? null: <div>Tasks updated successfully</div> }
      </form>
    );
  }
}

ShiftTaskListAndNotifications.propTypes = {
  ...PropTypes,
  addValue: PropTypes.func.isRequired,
  router: PropTypes.object,
  submitting: PropTypes.bool.isRequired
}

// static propTypes = {
//   ...propTypes,
//   // other props you might be using
// }


// Whenever fetchTasks is called, the result should be passed
// to all of the reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addValue: addArrayValue,
                              fetchTasks: fetchTasks,
                              fetchNotifications: fetchNotifications,
                              fetchProgressNotes: fetchProgressNotes,
                              submitTasks: submitTasks,
                              submitProgressNote: submitProgressNote,
                              incrDecrShiftSubmitRequestCount: incrDecrShiftSubmitRequestCount,
                              addProgressNoteToGlobalState: addProgressNoteToGlobalState,
                              setActivePage: setActivePage
                            }, dispatch);
}


function mapStateToProps(state) {

  // should match the state in the reducer_shift.js

  // Whatever is returned will show up as props
  // inside of ShiftTaskListAndNotifications

  console.log("inside mapStateToProps");

  // tried this as given in examples.  It did not work !!
  // initialValues: state.shift.shift // will pull state into form's initialValues
  var stateToProps = {};

  if (state.notifications.shift.notifications) {
  stateToProps.notifications = state.notifications.shift.notifications;
  stateToProps.user = state.users.user;
  stateToProps.patient = state.patients.patient;
}

if (state.shift.shift) {
  stateToProps.books = state.shift.shift;
  stateToProps.user = state.users.user;
  stateToProps.patient = state.patients.patient;
}

if (state.progressnotes.progress_notes ) {
  stateToProps.progress_notes = state.progressnotes.progress_notes;
  stateToProps.user = state.users.user;
  stateToProps.patient = state.patients.patient;
}

if (state.shiftrequest.shiftSubmitRequestCount >= 0) {
  stateToProps.shiftSubmitRequestCount = state.shiftrequest.shiftSubmitRequestCount;
  stateToProps.user = state.users.user;
  stateToProps.patient = state.patients.patient;
}


  return stateToProps;

  // if (state.notifications && state.shift.shift && state.progress.notes) {
  //   //  returning one array  notifications[]
  //   return {
  //     notifications: state.notifications.shift.notifications,
  //     books: state.shift.shift
  //     progress_notes: state.progress_notes
  //   };
  // } else if (state.notifications) {
  //   return {
  //     notifications: state.notifications.shift.notifications,t
  //   };
  // } else {
  //   //  two arrays  notifications[] and shift[]
  //   return {
  //     books: state.shift.shift // will pull state into form's initialValues
  //   };
  // }

}

export default reduxForm({
  form: "ShiftTaskListAndNotificationsForm",
  fields: fields
}, mapStateToProps, mapDispatchToProps)(ShiftTaskListAndNotifications);

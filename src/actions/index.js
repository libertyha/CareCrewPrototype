import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_CARE_CLIENTS = 'FETCH_CARE_CLIENTS';

export const FETCH_USER = 'FETCH_USER';
  export const FETCH_USERS = 'FETCH_USERS';

  export const FETCH_PATIENT = 'FETCH_PATIENT';
    export const FETCH_PATIENTS = 'FETCH_PATIENTS';

export const RESET_USER = 'RESET_USER';
export const RESET_USERS = 'RESET_USERS';
export const RESET_PATIENT = 'RESET_PATIENT';
export const RESET_PATIENTS = 'RESET_PATIENTS';

export const FETCH_BODY_MEASURES = 'FETCH_BODY_MEASURES';

//const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
//const API_KEY = '?key=NotNeededForCareCrew'; //everything after the equal
const ID_CALL = '?patientId=574248c15417d00300d15d84';
const ROOT_URL = 'http://carecrewhq.herokuapp.com/careCrew/';
const USERS = 'patients';
const HEALTH_MEASURES = 'healthMeasures';
export const CREATE_SYMPTOM_INSTANCE = 'CREATE_SYMPTOM_INSTANCE';
const ID_PATIENT_CALL = "?userIds=574502bbffbe460300638e25";
const ID_USER = "574502bbffbe460300638e25";
const API_KEY  = '';

export const SUBMIT_TASKS = 'SUBMIT_TASKS';
export const FETCH_SHIFT = 'FETCH_SHIFT';
export const FETCH_PROGRESS_NOTES = 'FETCH_PROGRESS_NOTES';
export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS';
export const INCR_DECR_SHIFT_REQUESTS = 'INCR_DECR_SHIFT_REQUESTS';
export const ADD_PROGRESS_NOTE = 'ADD_PROGRESS_NOTE';

// const ROOT_URL = 'http://carecrewhq.herokuapp.com/careCrew';
const PATIENT = 'patientId=574248c15417d00300d15d84';



export function selectBodyPart(bodyPart){
  //selectBook is an ActionCreator, it needs to return and action, an object with type property
  //actions usually have a type (which describes the purpose of the action) and a payload (which further describes the conditions of the action being triggered)
  return{
    type: 'BODYPART_SELECTED',
    payload: bodyPart
  }
}

export function selectPain(pain){

  return{
    type: 'PAIN_SELECTED',
    payload: pain
  }
}

export function selectSeverity(severity){

  return{
    type: 'SEVERITY_SELECTED',
    payload: severity
  }
}
export function fetchPosts(id) {
//  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`); //backticks do string interpolation
  const request = axios.get(`${ROOT_URL}/${HEALTH_MEASURES}${ID_CALL}`); //backticks do string interpolation

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function fetchCareClients(id) {
//  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`); //backticks do string interpolation
  const request = axios.get(`${ROOT_URL}/${USERS}${ID_PATIENT_CALL}`); //backticks do string interpolation

  return {
    type: FETCH_POSTS,
    payload: request
  }
}


export function createSymptomInstance(props) {
  const request = axios.post(`${ROOT_URL}/${HEALTH_MEASURES}${ID_CALL}`, props); //’props’ argument passes along the properties
  return {
    type: CREATE_SYMPTOM_INSTANCE,
  }
}



export function fetchUser(id) {
  const request = axios.get(`${ROOT_URL}/users?_id=${id}`);
  return {
    type: FETCH_USER,
    payload: request  };
  }


  export function fetchUsers(id) {
    const request = axios.get(`${ROOT_URL}/users`);
    return {
      type: FETCH_USERS,
      payload: request  };
    }


    export function fetchPatient(patientId) {
      const request = axios.get(`${ROOT_URL}/patients?_id=${patientId}`);
      return {
        type: FETCH_PATIENT,
        payload: request  };
      }
      

      export function fetchPatientsByUser(userId) {
        const request = axios.get(`${ROOT_URL}/patients?userIds=${userId}`);
        return {
          type: FETCH_PATIENTS,
          payload: request  };
        }

export function fetchBodyMeasures(patientId){
  const request = axios.get(`${ROOT_URL}${HEALTH_MEASURES}?patientId=${patientId}`); //backticks do string interpolation

  return {
    type: FETCH_BODY_MEASURES,
    payload: request
  }
}

export function resetUser() {
  return {
    type: RESET_USER,
  }
}
export function resetUsers() {
  return {
    type: RESET_USERS,
  }
}
export function resetPatients() {
  return {
    type: RESET_PATIENTS,
  }
}
export function resetPatient() {
  return {
    type: RESET_PATIENT,
  }
}


// =================================================================
//
//    submitShiftForm
//
// =================================================================
export function submitTasks(task) {

  console.log('inside submitTasks');

  console.log('task');
  console.log(task);

  // PUT http://carecrewhq.herokuapp.com/careCrew/tasks/574b7f8264a1a8f52182eb9e

  var data = {
    "status": task.status
  };

  var url = `${ROOT_URL}/tasks/${task._id}`;
  console.log('url');
  console.log(url);
  console.log('data');
  console.log(JSON.stringify(data));

  const request = axios.put(`${ROOT_URL}/tasks/${task._id}`, data);

  //  Object {task1: true, task2: true, notification: "testing"}

  return {
    type: SUBMIT_TASKS,
    payload: request
  };

}



// =================================================================
//
//    fetchShiftData
//
// =================================================================
export function fetchShiftData(props) {
  // const request = axios.post(url), props);
  // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);


  //  get tasks for specific patient
  const request = axios.get(`${ROOT_URL}/tasks${API_KEY}?${PATIENT}`);

  //   All Tasks for patient      "patientId": "574248c15417d00300d15d84"

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


// state === {
//  form: {
//    ShiftTaskListAndNotificationsForm: {
//      tasks: [
//        { id: 1,
//          description: 'a description',
//          date_scheduled: 05-26-2016,
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

//  commented below out to test axios call to server

// var request = {};

// request["tasks"] =
// [
//   {id: '0', description: 'description of task 0', date_scheduled: 'May 23, 2016 11:00am', owner: 'Linda', completed: false},
//   {id: '1', description: 'description of task 1', date_scheduled: 'May 23, 2016 3:00pm', owner: 'Linda', completed: false}
// ];

// request["notifications"] =
// [
//   {id: '0', description: 'Rose fell in the kitchen', date_created: 'May 23, 2016 11:00am', owner: 'Linda'},
//   {id: '1', description: 'Rose did not like the soup at lunch', date_created: 'May 23, 2016 3:00pm', owner: 'Linda'}
// ];

  console.log("inside fetchShiftData");

  return {
    type: FETCH_SHIFT,
    payload: request
  };

}


// =================================================================
//
//    fetchProgressNotes
//
// =================================================================
export function fetchProgressNotes(props) {
  // const url = 'http://carecrewhq.herokuapp.com/careCrew/progressnotes?patientId=574248c15417d00300d15d84';
  // const request = axios.get(`${ROOT_URL}/tasks${API_KEY}?${PATIENT}`);

  //  get tasks for specific patient
  const url = 'http://carecrewhq.herokuapp.com/careCrew/notifications?patientId=574248c15417d00300d15d84';

  // const request = axios.get(`${ROOT_URL}/notifications${API_KEY}?${PATIENT}`);
  const request = axios.get(url);

  // const request = axios.get(`${ROOT_URL}/notifications${API_KEY}?${PATIENT}`);
  // const request = axios.get(url);

  // var request = {};

  // add fake data here

  console.log("inside fetchProgressNotes");

  return {
    type: FETCH_PROGRESS_NOTES,
    payload: request
  };

}


// =================================================================
//
//    fetchNotifications
//
// =================================================================

export function fetchNotifications(props) {
  // const request = axios.post(url), props);
  // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  //  get tasks for specific patient
  const url = 'http://carecrewhq.herokuapp.com/careCrew/notifications?patientId=574248c15417d00300d15d84';

  // const request = axios.get(`${ROOT_URL}/notifications${API_KEY}?${PATIENT}`);
  const request = axios.get(url);

  //   All Notifications for patient      "patientId": "574248c15417d00300d15d84"

// state === {
//  form: {
//    ShiftTaskListAndNotificationsForm: {
//      tasks: [
//        { id: 1,
//          description: 'a description',
//          date_scheduled: 05-26-2016,
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

//  commented below out to test axios call to server

// var request = {};

// request["tasks"] =
// [
//   {id: '0', description: 'description of task 0', date_scheduled: 'May 23, 2016 11:00am', owner: 'Linda', completed: false},
//   {id: '1', description: 'description of task 1', date_scheduled: 'May 23, 2016 3:00pm', owner: 'Linda', completed: false}
// ];

// request["notifications"] =
// [
//   {id: '0', description: 'Rose fell in the kitchen', date_created: 'May 23, 2016 11:00am', owner: 'Linda'},
//   {id: '1', description: 'Rose did not like the soup at lunch', date_created: 'May 23, 2016 3:00pm', owner: 'Linda'}
// ];

  console.log("inside fetchNotifications");

  return {
    type: FETCH_NOTIFICATIONS,
    payload: request
  };

}


// =================================================================
//
//    incrDecrShiftSubmitRequestCount
//
// =================================================================

export function incrDecrShiftSubmitRequestCount(props) {

  console.log("inside incrDecrShiftSubmitRequestCount");

  var request = { incr_decr: props};

  console.log("request");
  console.log(request);

  return {
    type: INCR_DECR_SHIFT_REQUESTS,
    payload: request
  };

}


// =================================================================
//
//    addProgressNoteToGlobalState
//
// =================================================================

export function addProgressNoteToGlobalState(progressNote) {

  console.log("inside addProgressNoteToGlobalState");

  var request = { addprogressnote: true, progressNote: progressNote };

  console.log("request");
  console.log(request);

  return {
    type: FETCH_PROGRESS_NOTES,
    payload: request
  };

}


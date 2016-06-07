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

export const GENERATE_DEMO = 'GENERATE_DEMO';
export const SUBMIT_TASKS = 'SUBMIT_TASKS';
export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_PROGRESS_NOTES = 'FETCH_PROGRESS_NOTES';
export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS';
export const INCR_DECR_SHIFT_REQUESTS = 'INCR_DECR_SHIFT_REQUESTS';
export const ADD_PROGRESS_NOTE = 'ADD_PROGRESS_NOTE';

// const ROOT_URL = 'http://carecrewhq.herokuapp.com/careCrew';
const PATIENT = '574248c15417d00300d15d84';


export function setActivePage(activePage){

  return{
    type: 'ACTIVE_PAGE',
    payload: activePage
  }
}


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
  const request = axios.get(`${ROOT_URL}${HEALTH_MEASURES}${ID_CALL}`); //backticks do string interpolation

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function fetchCareClients(id) {
  const request = axios.get(`${ROOT_URL}${USERS}${ID_PATIENT_CALL}`); //backticks do string interpolation

  return {
    type: FETCH_POSTS,
    payload: request
  }
}


export function createSymptomInstance(props) {
  const request = axios.post(`${ROOT_URL}${HEALTH_MEASURES}${ID_CALL}`, props); //’props’ argument passes along the properties
  return {
    type: CREATE_SYMPTOM_INSTANCE,
  }
}

export function generateDemo() {
  const request = axios.post(`${ROOT_URL}startDemo`);
  return {
    type: GENERATE_DEMO,
    payload: request  };
  }

  export function setFamily(userId) {
    return {
      type: 'FAMILY',
      payload: userId  };
    }

    export function setCaretaker(userId) {
      return {
        type: 'CARETAKER',
        payload: userId  };
      }


export function fetchUser(id) {
  const request = axios.get(`${ROOT_URL}users?_id=${id}`);
  return {
    type: FETCH_USER,
    payload: request  };
  }


  export function fetchUsers(id) {
    const request = axios.get(`${ROOT_URL}users`);
    return {
      type: FETCH_USERS,
      payload: request  };
    }


    export function fetchPatient(patientId) {
      const request = axios.get(`${ROOT_URL}patients?_id=${patientId}`);
      return {
        type: FETCH_PATIENT,
        payload: request  };
      }


      export function fetchPatientsByUser(userId) {
        const request = axios.get(`${ROOT_URL}patients?userIds=${userId}`);
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
// == submitTasks
// =================================================================
export function submitTasks(task) {
  // TODO: do we need this var data?
  var data = {
    "status": task.status
  };
  const request = axios.put(`${ROOT_URL}tasks/${task._id}`, data);

  return {
    type: SUBMIT_TASKS,
    payload: request
  };
}

// =================================================================
// == submitProgressnotes
// =================================================================
export function submitProgressNote(progressNote) {
  console.log("inside submitProgressNote");

  var data = {
    patientId : progressNote.patientId,
    creatorId : progressNote.creatorId,
    description : progressNote.description
  };
  const request = axios.post(`${ROOT_URL}progressnotes`, data);

  return {
    type: SUBMIT_PROGRESS_NOTES,
    payload: request
  };
}

// =================================================================
// == fetchTasks
// =================================================================
export function fetchTasks(patientId) {
  console.log("inside fetchTasks");
  const request = axios.get(`${ROOT_URL}tasks${API_KEY}?patientId=${patientId}`);

  return {
    type: FETCH_TASKS,
    payload: request
  };
}

// =================================================================
// == fetchProgressNotes
// =================================================================
export function fetchProgressNotes(patientId) {
  console.log("inside fetchProgressNotes");

  const request = axios.get(`${ROOT_URL}progressNotes?patientId=${patientId}`);

  return {
    type: FETCH_PROGRESS_NOTES,
    payload: request
  };
}

// =================================================================
// == fetchNotifications
// =================================================================
export function fetchNotifications(patientId) {
  const request = axios.get(`${ROOT_URL}notifications?patientId=${patientId}`);

  console.log("inside fetchNotifications");
  return {
    type: FETCH_NOTIFICATIONS,
    payload: request
  };
}

// =================================================================
// == incrDecrShiftSubmitRequestCount
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
// == addProgressNoteToGlobalState
// =================================================================
export function addProgressNoteToGlobalState(progressNote) {

  console.log("inside addProgressNoteToGlobalState");

  var request = {
   addprogressnote: true,
   progressNote: progressNote
  };

  console.log("request");
  console.log(request);

  return {
    type: FETCH_PROGRESS_NOTES,
    payload: request
  };

}

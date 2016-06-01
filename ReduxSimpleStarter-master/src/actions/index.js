import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_CARE_CLIENTS = 'FETCH_CARE_CLIENTS';

export const FETCH_USER = 'FETCH_USER';
  export const FETCH_USERS = 'FETCH_USERS';

  export const FETCH_PATIENT = 'FETCH_PATIENT';
    export const FETCH_PATIENTS = 'FETCH_PATIENTS';

//const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
//const API_KEY = '?key=NotNeededForCareCrew'; //everything after the equal
const ID_CALL = '?patientId=574248c15417d00300d15d84';
const ROOT_URL = 'http://carecrewhq.herokuapp.com/careCrew/';
const USERS = 'patients';
const HEALTH_MEASURES = 'healthMeasures';
export const CREATE_SYMPTOM_INSTANCE = 'CREATE_SYMPTOM_INSTANCE';
const ID_PATIENT_CALL = "?userIds=574502bbffbe460300638e25";

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
  const request = axios.get(`${ROOT_URL}${HEALTH_MEASURES}${ID_CALL}`); //backticks do string interpolation

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function fetchCareClients(id) {
//  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`); //backticks do string interpolation
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

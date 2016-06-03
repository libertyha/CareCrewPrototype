import { FETCH_PATIENTS, FETCH_PATIENT, RESET_PATIENT, RESET_PATIENTS } from '../actions/index';
const INITIAL_STATE = { all: [], patient: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_PATIENTS:
      return { ...state, all: action.payload.data };
    case FETCH_PATIENT:
      return { ...state, patient: action.payload.data }; //keep existing state, but replace user value
    case RESET_PATIENT:
      return { ...state, patient: null};
    case RESET_PATIENTS:
      return { ...state, all: []};
    default:
      return state;  }
}

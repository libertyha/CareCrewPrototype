import { FETCH_USERS, FETCH_USER, RESET_USER, RESET_USERS} from '../actions/index';
const INITIAL_STATE = { all: [], user: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USERS:
      return { ...state, all: action.payload.data };
    case FETCH_USER:
      return { ...state, user: action.payload.data }; //keep existing state, but replace user value
    case RESET_USER:
      return { ...state, user: null};
    case RESET_USERS:
      return { ...state, all: []};
    default:
      return state;  }
}

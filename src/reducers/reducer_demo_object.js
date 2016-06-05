import { GENERATE_DEMO} from '../actions/index';
const INITIAL_STATE = { all: [], patient: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GENERATE_DEMO:
      return { ...state, all: action.payload.data };
    default:
      return state;  }
}

import { combineReducers } from 'redux';
import BodyParts from './reducer_svg_body';
import ActiveBodyPart from './reducer_active_body_part';
import PainReducer from './reducer_pain_list';
import ActivePain from './reducer_active_pain';
import SeverityReducer from './reducer_severity_list';
import ActiveSeverity from './reducer_active_severity';
import {reducer as formReducer} from 'redux-form';
import PostReducer from './reducer_posts';
import UserReducer from './reducer_users';
import PatientReducer from './reducer_patients';

const rootReducer = combineReducers({
  //any key set below (key: ReducerName) ends up as a key on our global state
  bodyParts: BodyParts,
  activeBodyPart: ActiveBodyPart,
  painList: PainReducer,
  activePain: ActivePain,
  severityList: SeverityReducer,
  activeSeverity: ActiveSeverity,
  posts: PostReducer,
  form:  formReducer,
  users: UserReducer,
  patients: PatientReducer

});

export default rootReducer;

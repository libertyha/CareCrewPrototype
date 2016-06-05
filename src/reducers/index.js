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
import ShiftReducer from './reducer_shift';
import ProgressNotesReducer from './reducer_progress_notes';
import NotificationsReducer from './reducer_notifications';
import ShiftRequestCountReducer from './reducer_incr_decr_shift_requests';
import AddProgressNote from './reducer_add_progress_note';
import BodyMeasuresReducer from './reducer_body_measures';
import ActivePage from './reducer_active_page';
import DemoObject from './reducer_demo_object';
import Family from './reducer_demo_family';
import Caretaker from './reducer_demo_caretaker';

const rootReducer = combineReducers({
  //any key set below (key: ReducerName) ends up as a key on our global state
  bodyParts: BodyParts,
  activeBodyPart: ActiveBodyPart,
  painList: PainReducer,
  activePain: ActivePain,
  severityList: SeverityReducer,
  activeSeverity: ActiveSeverity,
  posts: PostReducer,
  users: UserReducer,
  patients: PatientReducer,
  form: formReducer,
  shift: ShiftReducer,
  notifications: NotificationsReducer,
  progressnotes: ProgressNotesReducer,
  shiftrequest: ShiftRequestCountReducer,
  addprogressnote: AddProgressNote,
  bodyMeasures: BodyMeasuresReducer,
  activePage: ActivePage,
  demoObject: DemoObject,
  family: Family,
  caretaker: Caretaker
});

export default rootReducer;

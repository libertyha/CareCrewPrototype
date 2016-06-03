import { ADD_PROGRESS_NOTE } from '../actions/index';

 var INITIAL_STATE = { progress_notes: [] };


export default function(state = INITIAL_STATE, action) {


  switch(action.type) {
  case ADD_PROGRESS_NOTE:

    // return { ...state, all: action.payload };
    console.log('');
    console.log('');
    console.log('');
    console.log("inside reducer_add_progress_notes");

    console.log('state.progress_notes');
    console.log(state.progress_notes);
    console.log('action.payload.progressNote');
    console.log(action.payload.progressNote);
    console.log('');
    console.log('');
    console.log('');

    var tempArray = [];
    tempArray.push(action.payload.progressNote);

    var temp =  {...state, progress_notes: tempArray };
    return temp;

  default:
    return state;
  }
}

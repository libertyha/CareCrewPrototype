import { INCR_DECR_SHIFT_REQUESTS } from '../actions/index';

  var INITIAL_STATE = { shiftSubmitRequestCount: 0 };


export default function(state = INITIAL_STATE, action) {


  switch(action.type) {
  case INCR_DECR_SHIFT_REQUESTS:

    // return { ...state, all: action.payload };
    console.log('');
    console.log('');
    console.log('');
    console.log("inside reducer_incr_shift_requests");

    console.log('state.shiftSubmitRequestCount + action.payload.incr_decr ');
    console.log('state.shiftSubmitRequestCount');
    console.log(state.shiftSubmitRequestCount);
    console.log('action.payload.incr_decr');
    console.log(action.payload.incr_decr);
    console.log('');
    console.log('');
    console.log('');


    console.log(state.shiftSubmitRequestCount + action.payload.incr_decr );

    return {...state, shiftSubmitRequestCount: (state.shiftSubmitRequestCount + action.payload.incr_decr || 0) };

  default:
    return state;
  }
}

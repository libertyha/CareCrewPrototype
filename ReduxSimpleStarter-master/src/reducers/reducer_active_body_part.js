export default function(state = null, action){
  //state argument is not application state, only the state this reducer is responsible for
  //called whenever an action is called. Base case is used to return the current state if we don't care about the action
  //when argument comes in (e.g., when app loads) state is set to null
  switch(action.type){
    case 'BODYPART_SELECTED':
    return action.payload;
  }
  return state;
}

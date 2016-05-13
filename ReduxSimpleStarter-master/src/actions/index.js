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

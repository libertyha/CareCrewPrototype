import React from 'react';


const RadioItem = ({id, itemToSelect, radioSelect, radioGroup, defaultChecked}) => {
  return <li className="list-group-item" onChange={()=>radioSelect(id)} ><label><input type='radio' name={radioGroup} value={id} defaultChecked = {defaultChecked}/> {itemToSelect} </label></li>

};

export default RadioItem;

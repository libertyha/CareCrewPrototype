import React from 'react';
import { MenuItem } from 'react-bootstrap';


const DropdownGroupItem = ({id, itemLabel, setValue}) => {
  return <MenuItem eventKey = {id} value={id} onClick={() => setValue()}>{itemLabel}</MenuItem>

};


export default DropdownGroupItem;

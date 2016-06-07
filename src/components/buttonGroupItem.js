import React from 'react';
import { Button } from 'react-bootstrap';
const blankBox = {'height': '100%', 'width': '100px', 'float': 'left'};
const labelBox = {'height': '100%', 'float': 'left'};
const buttonLable = {'height': '100%'};
const tdMargin = {'marginLeft': '20px'}

const ButtonGroupItem = ({id, itemLabel, setValue, buttonClass}) => {
  return <Button value={id} className = {buttonClass} onClick={() => setValue()}><div style = {blankBox}></div><div style = {labelBox}><table style = {buttonLable}><tbody><tr><td><h3 style={tdMargin}>{itemLabel}</h3></td></tr></tbody></table></div></Button>

};

export default ButtonGroupItem;

import React, { Component, PropTypes } from 'react';

class PureTextarea extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.field !== nextProps.field;
  }

  render() {
    const { field, ...rest } = this.props;
    console.log("inside PureTextarea");
    return (<textarea {...field} {...rest}/>);
  }
}

PureTextarea.propTypes = {
  field: PropTypes.object.isRequired
}

export default PureTextarea;

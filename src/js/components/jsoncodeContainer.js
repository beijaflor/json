import React from 'react';
import { connect } from 'react-redux';

import JsonCode from "../components/jsoncode.js";
import { updateJsonValueHandler } from "../actions";

function mapStateToProps(state) {
  return {
    json:  state.json,
    value: state.jsoncode.value
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateValueHandler: (value) => { dispatch(updateJsonValueHandler(value)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonCode);

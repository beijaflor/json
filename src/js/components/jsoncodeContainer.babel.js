import React from 'react';
import { connect } from 'react-redux';

import JsonCode from "../components/jsoncode";
import { updateJsonValueHandler, displayChanageHandler, updateEditingAction, jsonErrorAction } from "../actions";

function mapStateToProps(state) {
  return {
    json:  state.json,
    value: state.jsoncode.value,
    display: state.jsoncode.display
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateValueHandler: (value) => { dispatch(updateJsonValueHandler(value)) },
    displayHandler: (bool) => { dispatch(displayChanageHandler("jsoncode", bool)) },
    editingHandler: (bool) => { dispatch(updateEditingAction(bool)) },
    jsonErrorHandler: (bool) => { console.log(`errorflag: ${bool}`);dispatch(jsonErrorAction(bool)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonCode);

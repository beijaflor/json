import React from 'react';
import { connect } from 'react-redux';

import ErrorDialog from "../components/errorDialog";
import { updateJsonValueHandler, displayChanageHandler } from "../actions";

function mapStateToProps(state) {
  return {
    error: state.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorDialog);

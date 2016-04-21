import React from 'react';
import { connect } from 'react-redux';

import JsonCode from "../components/jsoncode.js";

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonCode);

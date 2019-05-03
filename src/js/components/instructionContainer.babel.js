import React from 'react';
import { connect } from 'react-redux';

import Instruction from "../components/instruction";
import { } from "../actions";

function mapStateToProps(state) {
  return {
    contentType: state.contentType,
    editing:  state.editing
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Instruction);

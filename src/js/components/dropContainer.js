import React from 'react';
import { connect } from 'react-redux';

import DropContainer from "../components/drop.js";
import { dropHandler } from "../actions";

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    dropHandler: (json) => { dispatch(dropHandler(json)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropContainer);

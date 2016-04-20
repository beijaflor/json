import React from 'react';
import { connect } from 'react-redux';

import DropContainer from "../components/drop.js"
import { dropHandler } from "../actions";

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    dropHandler: () => { dispatch(dropHandler()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropContainer);

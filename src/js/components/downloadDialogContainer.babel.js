import React from 'react';
import { connect } from 'react-redux';

import DownloadDialog from "../components/downloadDialog";
import { } from "../actions";

function mapStateToProps(state) {
  return {
    editing:  state.editing,
    rows: state.csvtable.rows
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadDialog);

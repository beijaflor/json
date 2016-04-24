import React from 'react';
import { connect } from 'react-redux';

import DownloadDialog from "../components/downloadDialog";
import { showRowCsvtableAction } from "../actions";

function mapStateToProps(state) {
  return {
    editing:  state.editing,
    rows: state.csvtable.rows,
    csv: state.csvtable.rowcsv
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showRowCsvtableHandler: () => { dispatch(showRowCsvtableAction()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadDialog);

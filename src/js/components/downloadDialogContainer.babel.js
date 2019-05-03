import React from 'react';
import { connect } from 'react-redux';

import DownloadDialog from "../components/downloadDialog";

function mapStateToProps(state) {
  return {
    contentType: state.contentType,
    editing:  state.editing,
    rows: state.csvtable.rows,
    csv: state.csvtable.rowcsv,
    json: state.json
  }
}

export default connect(mapStateToProps, {})(DownloadDialog);

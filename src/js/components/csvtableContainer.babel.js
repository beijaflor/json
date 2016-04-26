import React from 'react';
import { connect } from 'react-redux';

import CsvTable from "../components/csvtable";
import { displayChanageHandler, updateRowsAction } from "../actions";

function mapStateToProps(state) {
  return {
    json: state.json,
    rowcsv: state.csvtable.rowcsv,
    display: state.csvtable.display
  }
}

function mapDispatchToProps(dispatch) {
  return {
    displayHandler: (bool) => { dispatch(displayChanageHandler("csvtable", bool)) },
    updateRowsHandler: (rows) => { dispatch(updateRowsAction(rows)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CsvTable);

import React from 'react';
import { connect } from 'react-redux';

import CsvTable from "../components/csvtable";
import { displayChanageHandler } from "../actions";

function mapStateToProps(state) {
  return {
    json: state.json,
    display: state.csvtable.display
  }
}

function mapDispatchToProps(dispatch) {
  return {
    displayHandler: (bool) => { dispatch(displayChanageHandler("csvtable", bool)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CsvTable);

import React from 'react';
import { connect } from 'react-redux';

import CsvTable from "../components/csvtable";

function mapStateToProps(state) {
  return {
    json: state.json
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CsvTable);

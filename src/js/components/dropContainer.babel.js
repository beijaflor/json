import React from 'react';
import { connect } from 'react-redux';

import DropContainer from "../components/drop";
import { dropHandler, updateCsvValueAction, displayChanageHandler } from "../actions";

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch, props) {
  return {
    dropHandler: (contentType, data) => {
      if (contentType === "csv" ) {
        dispatch(updateCsvValueAction(data));
      // dispatch(displayChanageHandler("jsoncode", true));
      } else {
        dispatch(dropHandler(data));
        dispatch(displayChanageHandler("jsoncode", true));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropContainer);

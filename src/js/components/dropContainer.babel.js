import React from 'react';
import { connect } from 'react-redux';

import DropContainer from "../components/drop";
import { dropHandler, updateCsvValueAction, displayChanageHandler } from "../actions";

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch, props) {
  const contentType = props.contentType;
  if (contentType && contentType === "csv") {
    return {
      dropHandler: (csv) => {
        dispatch(updateCsvValueAction(csv));
        // dispatch(displayChanageHandler("jsoncode", true));
      }
    }
  } else {
    return {
      dropHandler: (json) => {
        dispatch(dropHandler(json));
        dispatch(displayChanageHandler("jsoncode", true));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropContainer);

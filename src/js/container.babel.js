import React from 'react';
import { connect } from 'react-redux';

// load components
import Instruction from "./components/instruction";
import DropView from "./components/dropContainer";
import CsvTableView from "./components/csvtableContainer";
import JsonCodeView from "./components/jsoncodeContainer";

// load action
import * as actions from "./actions";

console.log(actions);

// logic
const App = React.createClass({
  componentDidMount() {
  },
  render() {
    return (
      <div>
        <Instruction />
        <JsonCodeView />
        <CsvTableView />
        <DropView contentType="json" />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    dropJson: () => { dispatch(actions.setUpdateJson()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

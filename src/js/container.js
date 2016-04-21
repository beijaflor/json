import React from 'react';
import { connect } from 'react-redux';

// load components
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
        <DropView contentType="json" />
        <JsonCodeView />
        <CsvTableView />
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

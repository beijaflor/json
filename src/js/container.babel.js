import React from 'react';
import { connect } from 'react-redux';

// load components
import Instruction from "./components/instructionContainer";
import ErrorDialog from "./components/errorDialogContainer";
import DownloadDialog from "./components/downloadDialogContainer";
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
        <section>
          <Instruction />
          <JsonCodeView />
          <ErrorDialog />
        </section>
        <section>
          <DownloadDialog />
          <CsvTableView />
        </section>
        <DropView />
      </div>
    );
  }
});

function mapStateToProps(state) {
  state.contentType = "json";
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    dropJson: () => { dispatch(actions.setUpdateJson()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { connect } from 'react-redux';

// load components
import DropView from "./components/dropContainer";
import CsvTableView from "./components/csvtable";
import JsonCodeView from "./components/jsoncodeContainer";

// load action
import * as actions from "./actions";

console.log(actions);

// logic
function cb(e) {
  readDropFile(e);
}

const App = React.createClass({
  componentDidMount() {
  },
  render() {
    return (
      <div
        onClick={ () => this.props.handleClick() }
      >
        <div>{ this.props.hoge }</div>
        <DropView contentType="json" callBack={cb} />
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
    dropJson: () => { dispatch(actions.setUpdateJson()) },
    handleClick: () => { dispatch(actions.increment()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

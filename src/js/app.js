import React from "react";
import ReactDOM from "react-dom";
import DropView from "./components/drop";
import CsvTableView from "./components/csvtable";
import JsonCodeView from "./components/jsoncode";

console.log("yo-ho-!");
console.log(React);

function cb(e) {
  readDropFile(e);
}

const App = React.createClass({
  componentDidMount() {
  },
  render() {
    return (
      <div>
        <DropView contentType="json" callBack={cb} />
        <JsonCodeView />
        <CsvTableView />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('react')
);

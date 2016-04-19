import React from "react";
import ReactDOM from "react-dom";
import DropView from "./components/drop";
import CsvTableView from "./components/csvtable";

console.log("yo-ho-!");
console.log(React);

ReactDOM.render(
  <div>
    <DropView contentType="json" callBack={readDropFile} />
    <CsvTableView />
  </div>,
  document.getElementById('react')
);

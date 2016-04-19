import React from "react";
import ReactDOM from "react-dom";
import DropView from "./components/drop";

console.log("yo-ho-!");
console.log(React);

ReactDOM.render(
  <DropView contentType="json" callBack={readDropFile}/>,
  document.getElementById('react')
);

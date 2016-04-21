import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

// setup redux
import reducer from "./reducer";
import App from "./container";
const store = createStore(reducer);

console.log("yo-ho-!");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react')
);

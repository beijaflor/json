import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { IndexRoute, Link, Router, Route, hashHistory, useRouterHistory } from "react-router";
import { createHashHistory } from "history";

// setup redux
import reducer from "./reducer";
import App2 from "./container";
const store = createStore(reducer);

console.log("yo-ho-!");

// setup Router
const history = useRouterHistory(createHashHistory)({queryKey: false});

const App = React.createClass({
  render() {
    return (
      <div><Link to="/csv">link</Link></div>
    );
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/csv" component={App2} />
    </Router>
  </Provider>,
  document.getElementById('react')
);

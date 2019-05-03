import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { IndexRedirect, Router, Route, hashHistory, useRouterHistory } from "react-router";
import { createHashHistory } from "history";

// setup redux
import reducer from "./reducer";
import container from "./container";
import container2 from "./container2";
const store = createStore(reducer);

console.log("yo-ho-!");

// setup Router
const history = useRouterHistory(createHashHistory)({queryKey: false});
import Nav from "./components/nav";

const App = React.createClass({
  render() {
    return (
      <div>
        <Nav />
        { this.props.children }
      </div>
    );
  }
});

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRedirect to="/json" />
        <Route path="/json" component={ container } />
        <Route path="/csv" component={ container2 } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('react')
);

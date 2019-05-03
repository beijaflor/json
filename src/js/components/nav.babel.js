import React from 'react';
import { Link } from "react-router";

export default React.createClass({
  render() {
    return (
      <nav>
        <ul className="inline-tab">
          <li className="item"><Link activeClassName='is-active' to="/json">JSON to CSV</Link></li>
          <li className="item"><Link activeClassName='is-active' to="/csv">CSV to JSON</Link></li>
        </ul>
      </nav>
    );
  }
})

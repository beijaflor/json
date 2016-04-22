import React from 'react';

export default React.createClass({
  render() {
    return (
      <p>
        <span className="instruction editing">
          Paste your JSON below.
        </span>

        <span className="instruction rendered">
          Click your JSON below to edit.
        </span>

        <span className="save">
          <a href="#">Create a permalink</a> any time.
        </span>

        <span>
          Please <a target="_blank" href="https://github.com/konklone/json/issues">report bugs and send feedback</a> on GitHub.
        </span>

        <span>
          Made by <a href="https://twitter.com/konklone">@konklone.</a>
        </span>
      </p>
    );
  }
})
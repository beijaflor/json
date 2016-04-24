import React from 'react';

export default React.createClass({
  propTypes: {
    editing: React.PropTypes.bool.isRequired
  },
  render() {
    const Instruction = (this.props.editing)
      ? "Paste your JSON below."
      : "Click your JSON below to edit.";

    return (
      <p>
        <span className="instruction">{Instruction}</span>

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
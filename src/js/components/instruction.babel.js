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
      </p>
    );
  }
})

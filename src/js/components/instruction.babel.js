import React from 'react';

export default React.createClass({
  propTypes: {
    contentType: React.PropTypes.string.isRequired,
    editing: React.PropTypes.bool.isRequired
  },
  render() {
    const Instruction = (this.props.contentType === 'json')
      ? (this.props.editing)
        ? `Paste your JSON.`
        : `Click JSON below to edit.`
      : `Click your CSV below to show the raw data.`; // apparently csv

    return (
      <p>
        <span className="instruction">{Instruction}</span>
      </p>
    );
  }
})

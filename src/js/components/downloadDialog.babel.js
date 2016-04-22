import React from 'react';

export default React.createClass({
  propTypes: {
    editing: React.PropTypes.bool.isRequired,
    rows: React.PropTypes.number
  },
  render() {
    if (this.props.editing) {
      return (
        <p>Your JSON will appear below as a table.</p>
      );
    } else {
      return (
        <p>
          {(() => {
            if(this.props.rows) {
              return (
                <span>Below are the first few rows (<span className="rows-count">{this.props.rows}</span> total). </span>
              )
            }
          })()}
          <a download="result.csv" href="#" className="download">Download the entire CSV</a>, or <a href="#" className="raw">show the raw data</a>.
        </p>
      );
    }
  }
})
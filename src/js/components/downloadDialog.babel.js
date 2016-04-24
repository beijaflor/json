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
    } else if (this.props.rows) {
      const dataUri = "data:text/csv;charset=utf-8," + encodeURIComponent(this.props.csv);
      console.log("download uri");
      console.log(dataUri);
      return (
        <p>
          <span>Below are the first few rows (<span className="rows-count">{this.props.rows}</span> total). </span>
          <a download="result.csv" href={dataUri} className="download">Download the entire CSV</a>, or <a href="#" className="raw" onClick={this.props.showRowCsvtableHandler}>show the raw data</a>.
        </p>
      );
    } else {
      return (
        <p />
      );
    }
  }
})
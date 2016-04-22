import React from 'react';

export default React.createClass({
  render() {
    return (
      <p>
        <span className="rendered">
          Below are the first few rows (<span className="rows count"></span> total).

          <a download="result.csv" href="#" className="download">
            Download the entire CSV</a>,

          or <a href="#" className="raw">show the raw data</a>.
        </span>

        <span className="editing">
          Your JSON will appear below as a table.
        </span>
      </p>
    );
  }
})
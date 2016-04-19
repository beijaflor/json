import React from 'react';

export default React.createClass({
  propTypes: {
  },
  getInitialState: () => {
    return {
      rowCsv: document.querySelector(".csv textarea").value
    }
  },
  focusHandler() {
    console.log("focused!");
    this.setState({
      rowCsv: document.querySelector(".csv textarea").value
    });
  },
  render() {
    console.log("render!");
    console.log(this.props);
    return (
      <div className="csv-table">
        <textarea className="row-csv" value={this.state.rowCsv} onFocus={this.focusHandler} readOnly />
        <table>
          <thead>
            <tr><th>test1</th><th>test2</th></tr>
          </thead>
          <tbody>
            <tr><td>val1</td><td>val2</td></tr>
            <tr><td>val3</td><td>val4</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
})
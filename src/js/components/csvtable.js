import React from 'react';

export default React.createClass({
  propTypes: {
  },
  getInitialState: () => {
    return {
    }
  },
  componentDidMount() {
    console.log("csvtable mounted!");
  },
  render() {
    return (
      <div className="csv-table">
        <textarea className="row-csv" readOnly></textarea>
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
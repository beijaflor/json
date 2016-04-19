import React from 'react';

export default React.createClass({
  propTypes: {
  },
  getInitialState: () => {
    return {
      rowCsv: document.querySelector(".csv textarea").value,
      display: ""
    }
  },
  focusHandler() {
    console.log("focused!");
    this.setState({
      rowCsv: document.querySelector(".csv textarea").value
    });
  },
  blurHandler() {
    console.log("blur!");
    this.setState({
      display: "_hidden"
    });
  },
  clickHandler() {
    console.log("clicked!");
    this.setState({
      display: ""
    });
  },
  render() {
    console.log("render!");
    const className = (this.state.display) ? "row-csv "+this.state.display : "row-csv" ;
    return (
      <div className="csv-table">
        <textarea className={className} readOnly
          value={this.state.rowCsv}
          onFocus={this.focusHandler}
          onBlur={this.blurHandler}
        />
        <table
          onClick={this.clickHandler}
        >
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
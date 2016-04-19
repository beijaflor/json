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
    console.log(this.state.rowCsv);
    const className = (this.state.display) ? "row-csv "+this.state.display : "row-csv" ;

    const rows = $.csv.toArrays(this.state.rowCsv);
    const header = rows.shift();

    const table = (() => {
      if (rows.length > 0) {
        const headerNodes = header.map((col) => {
          return (
            <th key={col}>{col}</th>
          );
        });

        const rowNodes = rows.map((row) => {
          const cellNodes = row.map((cell) => {
            return (
              <td>{cell}</td>
            );
          });
          return (
            <tr>
              {cellNodes}
            </tr>
          );
        });

        return (
          <table
            onClick={this.clickHandler}
          >
            <thead>
              <tr>{headerNodes}</tr>
            </thead>
            <tbody>
              {rowNodes}
            </tbody>
          </table>
        )
      } else {
        return null;
      }
    })()

    return (
      <div className="csv-table">
        <textarea className={className} readOnly
          value={this.state.rowCsv}
          onFocus={this.focusHandler}
          onBlur={this.blurHandler}
        />
        {table}
      </div>
    );
  }
})
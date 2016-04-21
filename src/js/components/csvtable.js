import React from 'react';

export default React.createClass({
  propTypes: {
  },
  getInitialState: () => {
    return {
      display: ""
    }
  },
  focusHandler() {
    console.log("focused!");
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
    console.log("render csvtable!");
    const rowCsv = csvTo(this.props.json);
    const className = (this.state.display) ? "row-csv "+this.state.display : "row-csv" ;

    const rows = $.csv.toArrays(rowCsv);
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
          value={rowCsv}
          onFocus={this.focusHandler}
          onBlur={this.blurHandler}
        />
        {table}
      </div>
    );
  }
})
import React from 'react';

export default React.createClass({
  excerptRows: 7,
  propTypes: {
    json: React.PropTypes.string.isRequired,
    display: React.PropTypes.bool.isRequired,
    displayHandler: React.PropTypes.func.isRequired,
    updateRowsHandler: React.PropTypes.func.isRequired
  },
  componentDidUpdate() {
    console.log("updated");
    if(this.props.display) {
      window.setTimeout( () => {
        if(this.myTextInput !== null) {
          this.myTextInput.focus();
          this.myTextInput.select();
        }
      }, 0);
    }
  },
  focusHandler() {
    console.log("focused!");
  },
  blurHandler() {
    console.log("blur!");
    this.props.displayHandler(false);
  },
  clickHandler() {
    console.log("clicked!");
    this.props.displayHandler(true);
  },
  render() {
    console.log("render csvtable!");
    const rowCsv = csvTo(this.props.json);
    let display = true;
    if (rowCsv)
      display = false;
    if (this.props.display)
      display = true;
    const className = (display) ? "row-csv" : "row-csv _hidden" ;

    const rows = $.csv.toArrays(rowCsv);
    const header = rows.shift();
    this.props.updateRowsHandler(rows.length);

    const excerpted = rows.slice(0, this.excerptRows);
    const table = (() => {
      if (excerpted.length > 0) {
        const headerNodes = header.map((col) => {
          return (
            <th key={col}>{col}</th>
          );
        });

        const rowNodes = excerpted.map((row) => {
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
          ref={(ref) => this.myTextInput = ref}
        />
        {table}
      </div>
    );
  }
})
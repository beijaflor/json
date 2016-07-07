import React from 'react';

export default React.createClass({
  propTypes: {
    contentType: React.PropTypes.string.isRequired,
    editing: React.PropTypes.bool.isRequired,
    rows: React.PropTypes.number,
    csv: React.PropTypes.string,
    json: React.PropTypes.string
  },
  render() {
    const type = {"csv": "json", "json": "csv"}[this.props.contentType];
    const contentName = type.toUpperCase();
    const contentType = `data:text/${contentName};charset=utf-8`;
    const filename = "result." + type;

    if (this.props.editing) {
      return (
        <p>Your {contentName} will appear below as a table.</p>
      );
    } else if (this.props.rows) {
      const data = ((type) => {
        if (type === "csv") {
          return this.props.csv;
        } else if (type === "json") {
          return this.props.json;
        } else {
          return "";
        }
      })(type);
      const dataUri = contentType + "," + encodeURIComponent(data);
      console.log("download uri");
      console.log(dataUri);
      return (
        <p>
          <span>Below are the first few rows (<span className="rows-count">{this.props.rows}</span> total). </span>
          <a download={filename} href={dataUri} className="download">Download the entire {contentName}</a>, or <a href="#" className="raw" onClick={this.props.showRowCsvtableHandler}>show the raw data</a>.
        </p>
      );
    } else {
      return (
        <p />
      );
    }
  }
})
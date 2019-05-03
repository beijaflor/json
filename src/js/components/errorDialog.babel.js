import React from 'react';

export default React.createClass({
  propTypes: {
    error: React.PropTypes.bool.isRequired
  },
  render() {
    console.log("render errorDialog")
    if (this.props.error) {
      return (
        <div className="error">
          There was an error parsing this JSON. If you're sure this JSON is valid, please <a className="report" target="_blank" href="https://github.com/baijaflor/json/issues/new"> file an issue</a>.
        </div>
      );
    } else {
      return (
        <div className="warning">
          Extremely large files may cause trouble &mdash; the conversion is done inside your browser.
        </div>
      );
    }
  }
})

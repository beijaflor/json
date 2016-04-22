import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <div className="warning">
          Extremely large files may cause trouble &mdash; the conversion is done inside your browser.
        </div>

        <div className="error">
          There was an error parsing this JSON. If you're sure this JSON is valid, please
          <a className="report" target="_blank"
            href="https://github.com/konklone/json/issues/new">
            file an issue</a>.
          You can
          <a className="save" href="#">create a permalink to the error</a>
          any time.
        </div>
      </div>
    );
  }
})
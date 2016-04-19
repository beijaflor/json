import React from 'react';

export default React.createClass({
  propTypes: {
  },
  getInitialState: () => {
    return {
      json: {},
      display: ""
    }
  },
  render() {
    console.log("render!");
    const className = (this.state.display) ? "row-json "+this.state.display : "row-json" ;
    return (
      <div className="json-code">
        <textarea className={className} value={this.state.rowCsv} />
        <pre class="pretty-json"><code></code></pre>
      </div>
    );
  }
})
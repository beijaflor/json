import React from 'react';

export default React.createClass({
  propTypes: {
  },
  getInitialState: () => {
    return {
      json: {},
      value: "",
      display: ""
    }
  },
  changeHandler(e) {
    console.log("changed!");
    const val = e.target.value;
    this.setState({value: val});
  },
  prettyJson(str) {
    const json = jsonFrom(str);
    if(json) {
      const pretty = JSON.stringify(json, undefined, 2);
      if (pretty.length < (50 * 1024)) {
        return hljs.highlightAuto(pretty).value;
      }
    }
    return null;
  },
  render() {
    console.log("render!");
    const prettyJson = this.prettyJson(this.state.value);
    const className = (this.state.display) ? "row-json "+this.state.display : "row-json" ;
    return (
      <div className="json-code">
        <textarea className={className} value={this.state.value} onChange={this.changeHandler} />
        <pre class="pretty-json"><code dangerouslySetInnerHTML={{__html: prettyJson}} /></pre>
      </div>
    );
  }
})
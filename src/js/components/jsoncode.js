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
  blurHandler(e) {
    console.log("blur!");
    this.setState({display: "_hidden"});
  },
  focusHandler(e) {
    console.log("focus!");
  },
  clickHandler(e) {
    console.log("click!");
    this.setState({display: ""}, () => {
      if(this.myTextInput !== null) {
        this.myTextInput.focus();
      }
    });
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
    const className1 = (this.state.display) ? "row-json "+this.state.display : "row-json" ;
    const className2 = (!this.state.display) ? "pretty-json _hidden" : "pretty-json" ;
    return (
      <div className="json-code">
        <textarea className={className1} value={this.state.value}
          onChange={this.changeHandler}
          onBlur={this.blurHandler}
          ref={(ref) => this.myTextInput = ref}
        />
        <pre className={className2}
          onClick={this.clickHandler}
        ><code dangerouslySetInnerHTML={{__html: prettyJson}} /></pre>
      </div>
    );
  }
})
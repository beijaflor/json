import React from 'react';

export default React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    json: React.PropTypes.string.isRequired,
    updateValueHandler: React.PropTypes.func.isRequired
  },
  getInitialState: () => {
    return {
      display: ""
    }
  },
  changeHandler(e) {
    console.log("changed!");
    const val = e.target.value;
    this.props.updateValueHandler(val);
  },
  blurHandler(e) {
    console.log("blur!");
    const val = e.target.value;
    this.props.updateValueHandler(val);
    this.setState({display: "_hidden"});
  },
  focusHandler(e) {
    console.log("focus!");
  },
  pasteHandler(e) {
    console.log("paste!");
    if(this.myTextInput !== null) {
      window.setTimeout(() => {
        this.myTextInput.blur();
      }, 0);
    }
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
    console.log("render jsoncode!");
    const prettyJson = this.prettyJson(this.props.json);
    const className1 = (this.state.display) ? "row-json "+this.state.display : "row-json" ;
    const className2 = (!this.state.display) ? "pretty-json _hidden" : "pretty-json" ;
    return (
      <div className="json-code">
        <textarea className={className1} value={this.props.value}
          onChange={this.changeHandler}
          onBlur={this.blurHandler}
          onPaste={this.pasteHandler}
          ref={(ref) => this.myTextInput = ref}
        />
        <pre className={className2}
          onClick={this.clickHandler}
        ><code dangerouslySetInnerHTML={{__html: prettyJson}} /></pre>
      </div>
    );
  }
})
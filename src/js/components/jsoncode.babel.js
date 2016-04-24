import React from 'react';

export default React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    json: React.PropTypes.string.isRequired,
    display: React.PropTypes.bool.isRequired,
    updateValueHandler: React.PropTypes.func.isRequired,
    displayHandler: React.PropTypes.func.isRequired,
    editingHandler: React.PropTypes.func.isRequired
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
    this.props.displayHandler(true);
    this.props.editingHandler(false);
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
    this.props.displayHandler(false)
    window.setTimeout( () => {
      if(this.myTextInput !== null) {
        this.myTextInput.focus();
        this.props.editingHandler(true);
      }
    }, 0);
  },
  prettyJson(str) {
    const json = jsonFrom(str);
    if (json) {
      this.props.jsonErrorHandler(false);
      const pretty = JSON.stringify(json, undefined, 2);
      if (pretty.length < (50 * 1024)) {
        return hljs.highlightAuto(pretty).value;
      }
    } else {
      this.props.jsonErrorHandler(true);
    }
    return null;
  },
  render() {
    console.log("render jsoncode!");
    const prettyJson = this.prettyJson(this.props.json);
    const className1 = (this.props.display) ? "row-json _hidden" : "row-json" ;
    const className2 = (!this.props.display) ? "pretty-json _hidden" : "pretty-json" ;
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
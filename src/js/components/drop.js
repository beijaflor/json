import React from 'react';

export default React.createClass({
  propTypes: {
    contentType: React.PropTypes.string.isRequired,
    callBack: React.PropTypes.func.isRequired
  },
  getInitialState: () => {
    return {
      display: "_hidden"
    }
  },
  componentDidMount() {
    console.log("dropView mounted!");
    const self = this;
    document.addEventListener("dragenter", (e) => {
      console.log("drag enter!!");
      this.setState({display: ""});
    });
  },
  dragEnterHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("drag enter!");
  },
  dragOverHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("drag over!");
  },
  dragCancelHandler(e) {
    console.log("drag canceled!");
    this.setState({display: "_hidden"});
    e.preventDefault();
    e.stopPropagation();
  },
  dropHandler(e) {
    console.log("drop!");
    this.setState({display: "_hidden"});

    if (e.dataTransfer) {
      if (e.dataTransfer.files.length) {
        e.preventDefault();
        e.stopPropagation();
        this.props.callBack(e);
      }
    }
  },
  render() {
    const className = (this.state.display) ? "drop-modal "+this.state.display : "drop-modal" ;
    return (
      <div
        className={className}
        onDragEnter={this.dragEnterHandler}
        onDragOver={this.dragOverHandler}
        onDragEnd={this.dragCancelHandler}
        onDragLeave={this.dragCancelHandler}
        onDrop={this.dropHandler}
      >DROP {this.props.contentType.toUpperCase()} HERE</div>
    );
  }
})
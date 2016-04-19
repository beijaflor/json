import React from 'react';

export default React.createClass({
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
    e.preventDefault();
    e.stopPropagation();
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
      >DROP JSON HERE</div>
    );
  }
})
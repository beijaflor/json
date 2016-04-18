import React from 'react';

export default React.createClass({
  dragEnterHandler: (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("drag enter!");
  },
  dragOverHandler: (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("drag over!");
  },
  dragEndHandler: (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("drag end!");
  },
  dropHandler: (e) => {
    console.log("drop!");
    e.preventDefault();
    e.stopPropagation();
  },
  render() {
    return (
      <div
        className="drop-modal"
        onDragEnter={this.dragEnterHandler}
        onDragOver={this.dragOverHandler}
        onDragEnd={this.dragEndHandler}
        onDrop={this.dropHandler}
      >DROP JSON HERE</div>
    );
  }
})
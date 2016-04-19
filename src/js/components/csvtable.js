import React from 'react';

export default React.createClass({
  propTypes: {
  },
  getInitialState: () => {
    return {
    }
  },
  componentDidMount() {
    console.log("csvtable mounted!");
  },
  render() {
    return (
      <div>CSV TABLE</div>
    );
  }
})
import React, { Component } from 'react';

class R032_Fragments extends Component {
  render() {
    return (
      <React.Fragment>   
        {/* 약식으로 사용 할 수있다. <></> */}
        <p>P TAG</p>
        <span>SPAN TAG</span>
      </React.Fragment>
    )
  }
}

export default R032_Fragments;
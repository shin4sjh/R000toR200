import React from 'react'
import {Consumer}  from "./R076_ContextApi";

// class contextChildren extends React.Component {
function contextChildren1({}) {
    // render () {
      return (
        <>
        {/* // <Consumer>
        //     {message=> <p>{`Message : ${message}`}</p>}
        // </Consumer> */}
        <Consumer children = {value => (<div>{value}</div>)} />
        </>
      )
    // }
}
export default contextChildren1
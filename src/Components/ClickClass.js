import React, { Component } from 'react'

export class ClickClass extends Component {
  render() {
    function clickClassFunction()
    {
        console.log("clicked from class compoent")
    }
    return (
      <div><button onClick={clickClassFunction}>Class button</button></div>
    )
  }
}

export default ClickClass
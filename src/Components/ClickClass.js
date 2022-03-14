import React, { Component } from 'react'

export class ClickClass extends Component {
    clickClassFunction()
    {
        console.log("clicked from class compoent")
    }
  render() {
    
    return (
      <div><button onClick={this.clickClassFunction}>Class button</button></div>
    )
  }
}

export default ClickClass

import React, { Component } from 'react'

class BindClick extends Component {

  constructor() {
    super()
    this.state = {
      message: 'Hello'
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    console.log(this)
    this.setState({message: 'Goodbye'})
  }

  

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default BindClick
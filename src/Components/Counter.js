import React, { Component } from 'react'
import updatedComponent from './ReUsableCode'

class Counter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           counterx:-1,
           hoverx:0
        }
      }    
      clickCounter = () =>
      {
          this.setState(prevState =>{return {counterx :prevState.counterx + 1}}) 
      }
      clickHover = () =>
      {
          this.setState(prevState =>{return {hoverx :prevState.hoverx + 1}}) 
      }
  render() {
      //const {counterx}= this.state
      let counterx = this.state.counterx
      let hoverx = this.state.hoverx
    return (
        <div>

<button onClick={this.clickCounter}> {this.props.name} Button is clicked {counterx} Times</button>
<h1 onMouseOver={this.clickHover}>{this.props.name} hovered {hoverx} Times</h1>
        </div>
     
    )
  }
}

export default updatedComponent(Counter)
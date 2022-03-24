import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           counterx:0,
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

<button onClick={this.clickCounter}>Button is clicked {counterx} Times</button>
<h1 onMouseOver={this.clickHover}> hovered {hoverx} Times</h1>
        </div>
     
    )
  }
}

export default Counter
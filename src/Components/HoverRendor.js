import React, { Component } from 'react'
class HoverRendor extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
    //   IncremenentCount = () =>
    //   {
    //       this.setState(prevState => {return{count:prevState.count+1}})
    //   }
    render() {
        
      return (
        <h1 onMouseOver={this.IncremenentCount}>Hovered {this.state.count}</h1>
        
      )
    }
  }

export default HoverRendor
import React, { Component } from 'react'
class CounterRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    IncremenentCount = () =>
    {
        this.setState(prevState => {return{count:prevState.count+1}})
    }
  render() {
      
    return (
      <button onClick={this.IncremenentCount}>Clickde {this.state.count}</button>
    )
  }
}

export default CounterRender
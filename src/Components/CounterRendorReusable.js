import React, { Component } from 'react'

class CounterRendorReusable extends Component {
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
      <div>CounterRendorReusable</div>
    )
  }
}

export default CounterRendorReusable
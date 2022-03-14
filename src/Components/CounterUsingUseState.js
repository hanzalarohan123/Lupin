import { hover } from '@testing-library/user-event/dist/hover'
import React, { Component } from 'react'

class CounterUsingUseState extends Component {

  constructor() {
    super()
    this.state =
    {
      count: 0
    }
  }
  increment() {
    this.setState
      (
        (prevState) => ({ count: prevState.count + 1 })

      )
  }
  additionalIncrement() {
    this.increment()

    this.increment()

    this.increment()

    this.increment()

    this.increment()

  }



  render() {
    return (
      <div>
        <h1>
          counterUsingUseState
        </h1>
        <h2>count is {this.state.count}</h2>
        <button onClick={() => this.additionalIncrement()}>
          Add
        </button>
      </div>
    )
  }
}
  
export default CounterUsingUseState
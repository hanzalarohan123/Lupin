import React, { Component } from 'react'

class LifeCycleA extends Component {
  constructor(props) {
    super(props)
    this.setState=
    {
      name:'vishwas'

    }
  console.log('constructor A')
  }
  componentDidMount()
  {
    console.log('componet deid mount')
    return null
  }
  static getDerivedStateFromProps(props,state)
  {
    console.log('getDeriveStateFromProps')
    return null 
  }
  
  render() {
    console.log('rendeor')
    return (
      
      <div>LifeCycleA </div>
      
    )
  }
}

export default LifeCycleA
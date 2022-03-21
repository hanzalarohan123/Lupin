import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('REG comp RENDER')
    return (
      <div>RegComp {this.props.name}</div>
    )
  }
}

export default RegComp
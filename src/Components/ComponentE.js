import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'
class ComponentE extends Component {
    
  render() {
    return (
        <div>
        {this.context}
      <ComponentF/></div>  
    )

  }
}
//Class e also able to render the USerCOntext through this apporoach
Component.contextType=UserContext
export default ComponentE
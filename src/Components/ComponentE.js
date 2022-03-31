import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'
//good project
class ComponentE extends Component {
    //static contextType=UserContext -can be user tooo
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
//another method is static contextType=UserContext 

export default ComponentE
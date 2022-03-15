import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          statement:'Hello'
       }
       this.greetComponent=this.greetComponent.bind(this)
     }
     greetComponent(childName)
     {
         alert(`Helllo${this.state.statement} as ${childName} `)
     }
  render() {
    return(  <ChildComponent greetComponent1={this.greetComponent}/>
    )
  }
}

export default ParentComponent
import React, { Component } from 'react'

 class Ref extends Component {
     constructor(props) {
       super(props)
     
       //second step of approach 1
          this.inputRef=React.createRef()
       
     }
     componentDidMount()
     {
        //third and final step of approach 1 
        this.inputRef.current.focus()
     }
  render() {
    return (
      <div>
          {/* first step is to add it step of approach 1 */}
          <input type='text' ref={this.inputRef} ></input>
      </div>
    )
  }
}

export default Ref
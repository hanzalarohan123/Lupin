import React, { Component } from 'react'

class IfnElse extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         message:true
      }
    }
  render() {
      
    
      if(this.state.message)
      {
          return <div>wow</div>
      }
      else
      {
          return <div>shitt</div>
          //line change ho gyi tw error agya tha div agli line m tha
      }
    
  }
}

export default IfnElse
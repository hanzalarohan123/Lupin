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
      <div>
          {/* yaha se counter ka rendr reusable code lagyga jo count or increment k method ko behjyga agy */}
          {this.props.render(this.state.count,this.IncremenentCount)}
      </div>
    )
  }
}

export default CounterRendorReusable
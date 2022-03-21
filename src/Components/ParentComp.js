import React, { PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent 
{
    constructor(props) {
      super(props)
    
      this.state = 
      {
         name:'Hi'
      }
    }
    componentDidMount()
    {
        setInterval(() => 
        {
            this.setState
            (
                {
                    name:'Hii'
                }
            )
        },2


        )
    }
  render() {
    return (
      <div>ParentComp 
          <RegComp name={this.state.name} ></RegComp>
          <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp
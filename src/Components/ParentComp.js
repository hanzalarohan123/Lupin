import React, { PureComponent } from 'react'
import Memo from './Memo'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent 
{
    constructor(props) {
      super(props)
    
      this.state = 
      {
         name:'Hii'
      }
    }
    componentDidMount()
    {
        setInterval(() => 
        {
            this.setState
            (
                {
                    name:'Hiii'
                }
            )
        },3000


        )
    }
  render() {
    return (
      <div>ParentComp 
          {/* <RegComp name={this.state.name} ></RegComp>
          <PureComp name={this.state.name}></PureComp> */}
          <Memo name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
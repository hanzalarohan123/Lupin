import React,{Component} from "react";

class Welcome extends Component
{
    render()
    {
      return <h1>Name is {this.props.name} and age is {this.props.age}</h1>

    }  
}
export default Welcome
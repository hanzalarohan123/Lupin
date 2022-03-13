import React, { Component } from "react";

class Welcome extends Component {

  render() {
    const { name, age } = this.props
    return <h1>{name}and age is {age}   </h1>
    //return <h1>{this.props.name}and age is {this.props.age}   </h1> //without destructuring


  }
}
export default Welcome
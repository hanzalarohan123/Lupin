import React, { Component } from "react";

class IncludinState extends Component {
  //constructor.
  constructor(props) {
    //calling super method of base class
    super(props);
    this.state = {
      message: "Welcome visitor",
    };
  }
  //should be declared outside constructor because it is not a builtin method
  changeMessage() {
    this.setState({
      message: "Thank you for subscribing!",
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>{" "}
        <button onClick={() => this.changeMessage()}> Subscribe </button>{" "}
      </div>
    );
  }
}
export default IncludinState;

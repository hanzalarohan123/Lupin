import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: " ",
            commentUser: " ",
            valueSelect: "React",
        };
    }
     handleUserName = event =>
    {
        this.setState
        (
            {
                userName:event.target.value
            }
        )

    }
    handleUserComments = event =>
    {
        this.setState
        (
            {
                commentUser:event.target.value
            }
        )

    }
    handleSelectTopic = event =>
    {
        this.setState
        (
            {
                valueSelect:event.target.value
            }
        )
    }
    fromHandler = event =>
    {
        alert( `${this.state.userName} ${this.state.commentUser} ${this.state.valueSelect} `)
    }
    render() {
        return (
            <form onSubmit={this.fromHandler}>
                <div>Form</div>
                <label>UserName</label>
                <input value={this.state.userName} onChange={this.handleUserName}></input>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.commentUser} onChange={this.handleUserComments}></textarea>
                </div>
                <div>
                    <select value={this.state.valueSelect} onChange={this.handleSelectTopic}>
                        <option>React</option>
                        <option>Vue</option>
                        <option>Anglar</option>
                    </select>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
}

export default Form;

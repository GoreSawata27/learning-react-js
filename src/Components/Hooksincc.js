import React, { Component } from 'react'

export default class extends Component {
    constructor() {
        super();
        this.state = {
            massage: "Click buttton to change word"
        };
    }
    changemassage() {
        this.setState({
            massage: "changed :)"
        })
    }

    render() {

        return (
            <>
                <div>
                   <h1>   {this.state.massage} </h1>
                </div>
                <button onClick={() => this.changemassage()}>Subscribe</button>
            </>
        )
    }
}

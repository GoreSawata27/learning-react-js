import React, { Component } from 'react'

export default class RefCc extends Component {
    constructor(props) {
        super(props)

        this.reff = React.createRef()
    }

    componentDidMount() {
        this.reff.current.focus()
    }

    render() {
        return (
            <div>
                <input ref={this.reff} type="text" />

            </div>
        )
    }
}

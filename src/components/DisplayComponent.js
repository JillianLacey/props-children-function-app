import React, { Component } from 'react'

export default class DisplayComponent extends Component {
    render() {
        return (
            <div className="display-text">{this.props.sayWhat}</div>
        );
    }
}

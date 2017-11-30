import React, { Component } from 'react';

class Hello extends Component {

    render() {
        return (
            <div>
                <div>Hello {this.props.name} World.</div>
            </div>
        )
    }
}

export default Hello;
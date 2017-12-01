
import React, { Component } from 'react';
import Row from '../Row/Row.component';

class Box extends Component {
    
    
    render() {
        return (
            <div>
                <Row data={this.props.data[0]} />
                <Row data={this.props.data[1]}/>
                <Row data={this.props.data[2]}/>
            </div>
        )
    }
}

export default Box;
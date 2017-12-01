
import React, { Component } from 'react';
import Row from '../Row/Row.component';

class Box extends Component {
    cellClickHandler() {
        console.log('cell click');
    }

    render() {
        const { data } = this.props;

        return (
            <div>
                <Row data={data[0]} cellClickHandler={this.cellClickHandler} />
                <Row data={data[1]} cellClickHandler={this.cellClickHandler} />
                <Row data={data[2]} cellClickHandler={this.cellClickHandler} />
            </div>
        )
    }
}

export default Box;

import React, { Component } from 'react';
import Cell from './Cell';

class Row extends Component {

    render() {
        return (
            <div>
                <Cell title="o" />
                <Cell title="o" />
                <Cell title="o" />
            </div>
        )
    }
}

export default Row;
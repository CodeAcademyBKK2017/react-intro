
import React, { Component } from 'react';
import Cell from './Cell';
import './App.css';

class Row extends Component {

    render() {
        return (
            <div>
                <Cell title="x" />
                <Cell title="o" />
                <Cell title="o" />
            </div>
        )
    }
}

export default Row;
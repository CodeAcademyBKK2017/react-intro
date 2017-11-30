
import React, { Component } from 'react';
import Row from './Row';
import './App.css';

class Box extends Component {
    render() {
        return (
            <div style={{background: 'black'}}>
                <Row />
                <Row />
                <Row />
            </div>
        )
    }
}

export default Box;
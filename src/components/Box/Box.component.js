
import React, { Component } from 'react';
import Row from '../Row/Row.component';

class Box extends Component {
    render() {
        const rowData1 = ['x','o','o'];
        const rowData2 = ['x','o','o'];
        const rowData3 = ['x','x','o'];

        return (
            <div>
                <Row data={rowData1} />
                <Row data={rowData2}/>
                <Row data={rowData3}/>
            </div>
        )
    }
}

export default Box;
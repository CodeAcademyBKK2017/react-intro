
import React, { Component } from 'react';
import Cell from '../Cell/Cell.component';

class Row extends Component {

    render() {
        const {data, cellClickHandler} = this.props;

        return (
            <div>
                <Cell title={data[0]} cellClickHandler={cellClickHandler} />
                <Cell title={data[1]} cellClickHandler={cellClickHandler} />
                <Cell title={data[2]} cellClickHandler={cellClickHandler} />
            </div>
        )
    }
}

export default Row;
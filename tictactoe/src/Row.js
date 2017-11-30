import React from 'react';

import Cell from './Cell'

class Row extends React.Component {
    render() {
        const emptyCellLists = new Array(Number(this.props.numberOfCell)).fill();
        const cellLists = emptyCellLists.map((emptyCellList, index) => <Cell key={index} text="o" color="blue" />);
        return (
            <div>
                {cellLists}
            </div>
        );
    }
}

export default Row;

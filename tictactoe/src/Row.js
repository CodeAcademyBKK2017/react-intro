import React from 'react';

import Cell from './Cell'

class Row extends React.Component {
    render() {
        const emptyCellLists = new Array(Number(this.props.cellNumber)).fill(1);
        const cellLists = emptyCellLists.map((emptyCellList) => <Cell text="o" color="blue" />);
        return (
            <div>
                {cellLists}
            </div>
        );
    }
}

export default Row;

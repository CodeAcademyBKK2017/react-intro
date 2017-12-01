import React from 'react';

import Cell from '../Cell/Cell.component'

class Row extends React.Component {
    render() {
        const cellLists = this.props.rowData.map((cellData, index) => <Cell key={index} cellData={cellData} color="blue" cellClickHandler={this.props.cellClickHandler} />);
        return (
            <div>
                {cellLists}
            </div>
        );
    }
}

export default Row;

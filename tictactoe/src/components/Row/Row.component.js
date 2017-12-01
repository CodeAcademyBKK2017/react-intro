import React from 'react';

import Cell from '../Cell/Cell.component'

class Row extends React.Component {
    render() {
        const cellLists = this.props.rowData.map((cellData, index) => <Cell key={index} cellData={cellData} color="blue" />);
        return (
            <div>
                {cellLists}
            </div>
        );
    }
}

export default Row;

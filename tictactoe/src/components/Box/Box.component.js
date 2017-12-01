import React from 'react';

import Row from '../Row/Row.component'

class Box extends React.Component {
    cellClickHandler = () => {
        console.log('cell clicked', this);
    }
    render() {
        const rowLists = this.props.boxData.map((rowData, index) => <Row key={index} rowData={rowData} cellClickHandler={this.cellClickHandler} />);
        return (
            <div>
                {rowLists}
            </div>
        );
    }
}

export default Box;

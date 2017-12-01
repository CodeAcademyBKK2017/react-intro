import React from 'react';

import Row from '../Row/Row.component'

class Box extends React.Component {
    render() {
        const rowLists = this.props.boxData.map((rowData, index) => <Row key={index} rowData={rowData} />);
        return (
            <div>
                {rowLists}
            </div>
        );
    }
}

export default Box;

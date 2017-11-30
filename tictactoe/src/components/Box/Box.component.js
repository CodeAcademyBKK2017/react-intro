import React from 'react';

import Row from '../Row/Row.component'

class Box extends React.Component {
    render() {
        const emptyRowLists = new Array(Number(this.props.numberOfRow)).fill();
        const rowLists = emptyRowLists.map((emptyRowList, index) => <Row key={index} numberOfCell={this.props.numberOfCell} />);
        return (
            <div>
                {rowLists}
            </div>
        );
    }
}

export default Box;

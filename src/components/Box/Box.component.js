import React, { Component } from 'react';
import Row from '../Row/Row.component';

class Box extends Component {
	render() {
		return (
			<div>
				<Row cellData={this.props.rowData[0]}/>
				<Row cellData={this.props.rowData[1]}/>
				<Row cellData={this.props.rowData[2]}/>
			</div>
		);
	}
}

export default Box;

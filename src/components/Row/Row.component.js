import React, { Component } from 'react';
import Cell from '../Cell/Cell.component';

class Row extends Component {
	render() {
		return (
			<div>
				<Cell text={this.props.cellData[0]}/>
				<Cell text={this.props.cellData[1]}/>
				<Cell text={this.props.cellData[2]}/>
			</div>
		);
	}
}

export default Row;

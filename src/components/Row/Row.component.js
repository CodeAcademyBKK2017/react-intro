import React, { Component } from 'react';
import Cell from './Cell';

class Row extends Component {
	render() {
		return (
			<div>
				<Cell text={this.props.value[0]}/>
				<Cell text={this.props.value[1]}/>
				<Cell text={this.props.value[2]}/>
			</div>
		);
	}
}

export default Row;

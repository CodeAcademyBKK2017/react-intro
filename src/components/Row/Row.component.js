import React, { Component } from 'react';
import Cell from '../Cell/Cell.component';

class Row extends Component {
	render() {
		const {cellData, cellClickHandler} = this.props;

		return (
			<div>
				<Cell text={cellData[0]} cellClickHandler={cellClickHandler}/>
				<Cell text={cellData[1]} cellClickHandler={cellClickHandler}/>
				<Cell text={cellData[2]} cellClickHandler={cellClickHandler}/>
			</div>
		);
	}
}

export default Row;

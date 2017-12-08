import React, { Component } from 'react';
import Cell from '../Cell/Cell.component';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Row extends Component {

	mapCellWithKey = (element) => {
		const {rowId, cellClickHandler} = this.props;
		return <Cell key={element.cellId} rowId={rowId} cellId={element.cellId} data={element.data} cellClickHandler={cellClickHandler}/>
	}

	render() {
		const {cellDataArray} = this.props;
		const cellCompArray = cellDataArray.map(this.mapCellWithKey);

		return (
			<div>
				{cellCompArray}
			</div>
		);
	}
}

Row.propTypes = {
	rowId: PropTypes.number.isRequired,
	cellDataArray: PropTypes.array.isRequired,
	cellClickHandler: PropTypes.func.isRequired
};

Row.defaultProps = {
	rowId: 0,
	cellDataArray: [
		{
			cellId: 0,
			data: ''
		},
		{
			cellId: 1,
			data: ''
		},
		{
			cellId: 2,
			data: ''
		}
	],
	cellClickHandler: noop
};

export default Row;

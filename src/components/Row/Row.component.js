import React, { Component } from 'react';
import Cell from '../Cell/Cell.component';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Row extends Component {

	mapCellWithKey = (element) => {
		const {cellClickHandler} = this.props;
		return <Cell key={element.cellId} cellId={element.cellId} data={element.data} cellClickHandler={cellClickHandler}/>
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
	cellDataArray: PropTypes.array.isRequired,
	cellClickHandler: PropTypes.func.isRequired
};

Row.defaultProps = {
	cellDataArray: [
		{
			cellId: "0",
			data: ""
		},
		{
			cellId: "1",
			data: ""
		},
		{
			cellId: "2",
			data: ""
		}
	],
	cellClickHandler: noop
};

export default Row;

import React, { Component } from 'react';
import './Cell.style.css';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Cell extends Component {
	render() {
		const {rowId, cellId, data, cellClickHandler} = this.props;
		
		return (
			<div className="Cell" onClick={cellClickHandler(rowId, cellId)}>
				{data}
			</div>
		);
	}
}

Cell.propTypes = {
	rowId: PropTypes.number.isRequired,
	cellId: PropTypes.number.isRequired,
	data: PropTypes.oneOf(['O', 'X', '']).isRequired,
	cellClickHandler: PropTypes.func.isRequired
};

Cell.defaultProps = {
	rowId: 0,
	cellId: 0,
	data: '',
	cellClickHandler: noop
};

export default Cell;

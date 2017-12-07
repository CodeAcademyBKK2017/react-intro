import React, { Component } from 'react';
import './Cell.style.css';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Cell extends Component {
	render() {
		const {cellClickHandler, data, cellId} = this.props;
		
		return (
			<div className="Cell" onClick={cellClickHandler(cellId)}>
				{data}
			</div>
		);
	}
}

Cell.propTypes = {
	cellId: PropTypes.string.isRequired,
	data: PropTypes.oneOf(['O', 'X', '']).isRequired,
	cellClickHandler: PropTypes.func.isRequired
};

Cell.defaultProps = {
	cellId: "0",
	data: '',
	cellClickHandler: noop
};

export default Cell;

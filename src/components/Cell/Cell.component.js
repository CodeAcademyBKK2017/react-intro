import React, { Component } from 'react';
import './Cell.style.css';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Cell extends Component {
	render() {
		const {cellClickHandler, text} = this.props;
		
		return (
			<div className="Cell" onClick={cellClickHandler(text)}>
				{this.props.text}
			</div>
		);
	}
}

Cell.propTypes = {
	text: PropTypes.oneOf(['O', 'X']).isRequired,
	cellClickHandler: PropTypes.func.isRequired
};

Cell.defaultProps = {
	text: 'O',
	cellClickHandler: noop
};

export default Cell;

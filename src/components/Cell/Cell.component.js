import React, { Component } from 'react';
import './Cell.style.css';

class Cell extends Component {
	render() {
		const {cellClickHandler} = this.props;

		return (
			<div className="Cell" onClick={cellClickHandler}>
				{this.props.text}
			</div>
		);
	}
}

export default Cell;

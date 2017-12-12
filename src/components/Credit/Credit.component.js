import React, { Component } from 'react';
import './Credit.style.css';
import PropTypes from 'prop-types';

class Credit extends Component {
	render() {
		const {name} = this.props;
		return (
			<div className='credit'>
				Made by {name}
			</div>
		);
	}
}

Credit.propTypes = {
	name: PropTypes.string.isRequired
};

Credit.defaultProps = {
	name: ''
};

export default Credit;

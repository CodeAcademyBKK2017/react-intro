import React, { Component } from 'react';
import './Header.style.css';
import PropTypes from 'prop-types';

class Header extends Component {
	render() {
		const {title, subtitle} = this.props;
		return (
			<div>
				<span className='title'>{title}</span>
				<span className='subtitle'>{subtitle}</span>
			</div>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired
};

Header.defaultProps = {
	title: '',
	subtitle: ''
};

export default Header;

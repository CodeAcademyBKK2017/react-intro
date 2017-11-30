import React, { Component } from 'react';
import Row from '../Row/Row.component';

class Box extends Component {
	render() {
		return (
			<div>
				<Row value={this.props.value[0]}/>
				<Row value={this.props.value[1]}/>
				<Row value={this.props.value[2]}/>
			</div>
		);
	}
}

export default Box;

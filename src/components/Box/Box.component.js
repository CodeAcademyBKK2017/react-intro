import React, { Component } from 'react';
import Row from '../Row/Row.component';
import PropTypes from 'prop-types';

class Box extends Component {
	// Class Property
	// prefer this arrow function but it valid in ES7 so we will use Class Method for now
	// cellClickHandler = () => {
	// 	console.log('cell clicked');
	// }


	// Class Method
	// cellClickHandler(text) {
	// 	// console.log('cell clicked', text);

	// 	return () => {
	// 		console.log('new cell clicked', text);
	// 	};
	// }

				// cellClickHandler = (text) => () => {
				// 	console.log('new cell clicked', text);
				// };

	// newCellCickHandler = (text) => {
	// 	return () => {

	// 	};
	// }

	constructor() {
		super();
		this.cellClickHandler = this.cellClickHandler.bind(this);
	}

	cellClickHandler(text) {
		return () => {
			console.log('new cell clicked', text);
		};
	};

	render() {
		const {rowData} = this.props;

		return (
			<div>
				<Row cellData={rowData[0]} cellClickHandler={this.cellClickHandler}/>
				<Row cellData={rowData[1]} cellClickHandler={this.cellClickHandler}/>
				<Row cellData={rowData[2]} cellClickHandler={this.cellClickHandler}/>
			</div>
		);
	}
}

Box.propTypes = {
	rowData: PropTypes.array.isRequired
};

Box.defaultProps = {
	rowData: [
		['O', 'O', 'O'],
		['O', 'O', 'O'],
		['O', 'O', 'O']
	]
};

export default Box;

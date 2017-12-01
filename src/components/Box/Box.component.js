import React, { Component } from 'react';
import Row from '../Row/Row.component';

class Box extends Component {
	// Class Property
	// prefer this arrow function but it valid in ES7 so we will use Class Method for now
	// cellClickHandler = () => {
	// 	console.log('cell clicked');
	// }

	// Class Method
	cellClickHandler() {
		console.log('cell clicked');
	}

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

export default Box;

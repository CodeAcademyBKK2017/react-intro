import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';

import Hello from './components/Hello/Hello.component';
import Box from './components/Box/Box.component';

class App extends Component {

	rowDataArray = [
		{
			rowId: uuid(),
			data: ["O", "X", "O"]
		},
		{
			rowId: uuid(),
			data: ["X", "O", "O"]
		},
		{
			rowId: uuid(),
			data: ["X", "X", "O"]
		}
	];

	render() {
		return (
			<div className="App">

			<Hello name="Chong" test={{test:123}}/>

			<Box rowData={this.rowDataArray} />
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import Row from '../Row/Row.component';
// import uuid from 'uuid';

const tableSize = 3;
const startTurn = 1;
const maxTurn = tableSize * tableSize;

const replaceIndex = (array, index, replaceWith) => [...array.slice(0, index), replaceWith, ...array.slice(index + 1, array.length)];

class Box extends Component {

	// state = {
	// 	turn: 1,
	// 	rowDataArray: [
	// 		{
	// 			rowId: uuid(),
	// 			cellDataArray: [
	// 				{
	// 					cellId: uuid(),
	// 					data: ""
	// 				},
	// 				{
	// 					cellId: uuid(),
	// 					data: ""
	// 				},
	// 				{
	// 					cellId: uuid(),
	// 					data: ""
	// 				}
	// 			]
	// 		},
	// 		{
	// 			rowId: uuid(),
	// 			cellDataArray: [
	// 				{
	// 					cellId: uuid(),
	// 					data: ""
	// 				},
	// 				{
	// 					cellId: uuid(),
	// 					data: ""
	// 				},
	// 				{
	// 					cellId: uuid(),
	// 					data: ""
	// 				}
	// 			]
	// 		},
	// 		{
	// 			rowId: uuid(),
	// 			cellDataArray: [
	// 				{
	// 					cellId: uuid(),
	// 					data: ""
	// 				},
	// 				{
	// 					cellId: uuid(),
	// 					data: ""
	// 				},
	// 				{
	// 					cellId: uuid(),
	// 					data: ""
	// 				}
	// 			]
	// 		}
	// 	]
	// }
	
	constructor() {
		super();

		this.state = {
			turn: startTurn,
			rowDataArray: []
		};

		for(let i = 0 ; i < tableSize ; i++) {
			const rowData = {
				rowId: i,
				cellDataArray: []
			};

			for(let j = 0 ; j < tableSize ; j++) {
				const cellData = {
					cellId: j,
					data: ''
				};
				rowData.cellDataArray.push(cellData);
			}
		}
	}

	findCellData = (state, cellId) => {
		let cellData;
		
		for(let i = 0 ; i < state.rowDataArray.length ; i++) {
			const rowData = state.rowDataArray[i];
			const targetCell = rowData.cellDataArray.find((element) => {
				return element.cellId === cellId && element.data === "";
			});

			if(targetCell) {
				cellData = targetCell;
				break;
			}
		}

		return cellData;
	}

	cellClickHandler = (rowId, cellId) => () => {
		if(this.state.turn > maxTurn) {
			console.log('GAME END : can not play anymore');
		}
		else {
			const newState = this.state;
			const cellData = this.findCellData(newState, cellId);
			if(cellData) {
				cellData.data = (newState.turn % 2 === 0) ? "O" : "X";
				newState.turn++;
				this.setState(newState);
			}
		}
	};

	mapRowWithKey = (element) => {
		return <Row key={element.rowId} rowId={element.rowId} cellDataArray={element.cellDataArray} cellClickHandler={this.cellClickHandler}/>
	}

	render() {
		const rowCompArray = this.state.rowDataArray.map(this.mapRowWithKey);
		return (
			<div>
				{rowCompArray}
			</div>
		);
	}
}

export default Box;

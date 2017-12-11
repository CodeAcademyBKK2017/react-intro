import React, { Component } from 'react';
import Row from '../Row/Row.component';

const tableSize = 3;
const startTurn = 1;
const maxTurn = tableSize * tableSize;

const GameStatePlaying = 'PLAYING';
const GameStateEnd = 'GAME END';
const gameStateArray = [GameStatePlaying, GameStateEnd];

const replaceIndex = (array, index, replaceWith) => [...array.slice(0, index), replaceWith, ...array.slice(index + 1, array.length)];

class Box extends Component {

	constructor() {
		super();

		this.state = {
			turn: startTurn,
			gameState: 0,
			rowDataArray: []
		};

		for(let i = 0 ; i < tableSize ; i++) {
			const rowData = {
				rowId: i,
				cellDataArray: []
			};
			this.state.rowDataArray.push(rowData);

			for(let j = 0 ; j < tableSize ; j++) {
				const cellData = {
					cellId: j,
					data: ''
				};
				rowData.cellDataArray.push(cellData);
			}
		}
	}

	isRowAndCellIndexOutOfBound = (rowId, cellId) => {
		if(rowId >= 0 && rowId < tableSize && cellId >= 0 && cellId < tableSize) {
			return false;
		}
		return true;
	}

	checkWinnerWithResult = (result) => {
		if(result === 'X'.repeat(tableSize)) {
			return 'X';
		}
		else if(result === 'O'.repeat(tableSize)) {
			return 'O';
		}
		else {
			return null;
		}
	}

	getWinner = (rowDataArray) => {
		//check horizontal win
		for(let i = 0 ; i < tableSize ; i++) {
			let result = '';

			for(let j = 0 ; j < tableSize ; j++) {
				const data = rowDataArray[i].cellDataArray[j].data;
				result += data;
			}

			const winner_h = this.checkWinnerWithResult(result)
			if(winner_h) {
				return winner_h;
			}
		}

		//check vertical win
		for(let i = 0 ; i < tableSize ; i++) {
			let result = '';

			for(let j = 0 ; j < tableSize ; j++) {
				const data = rowDataArray[j].cellDataArray[i].data;
				result += data;
			}

			const winner_v = this.checkWinnerWithResult(result)
			if(winner_v) {
				return winner_v;
			}
		}

		//check diagonal 1 win
		for(let i = 0 ; i < tableSize ; i++) {
			let result = '';
			const data = rowDataArray[i].cellDataArray[i].data;
			result += data;

			const winner_d1 = this.checkWinnerWithResult(result)
			if(winner_d1) {
				return winner_d1;
			}
		}

		//check diagonal 2 win
		for(let i = 0 ; i < tableSize ; i++) {
			let result = '';
			const data = rowDataArray[tableSize - 1 - i].cellDataArray[i].data;
			result += data;

			const winner_d2 = this.checkWinnerWithResult(result)
			if(winner_d2) {
				return winner_d2;
			}
		}

		//not found winner
		if(this.state.turn < maxTurn) {
			return null;
		}
		else {
			//last turn
			return '';
		}
	}

	replaceCellData = (rowId, cellId) => {
		const newData = (this.state.turn % 2 === 0) ? "O" : "X";
		const newCellData = {...this.state.rowDataArray[rowId].cellDataArray[cellId], data: newData};
		const newCellDataArray = replaceIndex(this.state.rowDataArray[rowId].cellDataArray, cellId, newCellData);

		const newRowData = {...this.state.rowDataArray[rowId], cellDataArray: newCellDataArray};
		const newRowDataArray = replaceIndex(this.state.rowDataArray, rowId, newRowData);

		const newTurn = this.state.turn + 1;
		const newGameState = this.getWinner(newRowDataArray) ? 1 : 0;
		const newState = {...this.state, turn: newTurn, gameState: newGameState, rowDataArray: newRowDataArray};

		this.setState(newState);
	}

	cellClickHandler = (rowId, cellId) => () => {
		if(this.isRowAndCellIndexOutOfBound(rowId, cellId)) {
			return;
		}
		this.replaceCellData(rowId, cellId);
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

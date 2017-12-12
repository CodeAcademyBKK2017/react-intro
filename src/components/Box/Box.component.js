import React, { Component } from 'react';
import Row from '../Row/Row.component';
import { setTimeout } from 'timers';

class Box extends Component {

	tableSize = 3;
	startTurn = 1;
	maxTurn = this.tableSize * this.tableSize;

	GameStatePlaying = 'PLAYING';
	GameStateEnd = 'GAME END';
	gameStateArray = [this.GameStatePlaying, this.GameStateEnd];

	replaceIndex = (array, index, replaceWith) => [...array.slice(0, index), replaceWith, ...array.slice(index + 1, array.length)];

	constructor() {
		super();

		this.state = {
			turn: this.startTurn,
			gameState: 0,
			rowDataArray: []
		};

		for(let i = 0 ; i < this.tableSize ; i++) {
			const rowData = {
				rowId: i,
				cellDataArray: []
			};
			this.state.rowDataArray.push(rowData);

			for(let j = 0 ; j < this.tableSize ; j++) {
				const cellData = {
					cellId: j,
					data: ''
				};
				rowData.cellDataArray.push(cellData);
			}
		}
	}

	isRowAndCellIndexOutOfBound = (rowId, cellId) => {
		if(rowId >= 0 && rowId < this.tableSize && cellId >= 0 && cellId < this.tableSize) {
			return false;
		}
		return true;
	}

	checkWinnerWithResult = (result) => {
		if(result === 'X'.repeat(this.tableSize)) {
			return 'X';
		}
		else if(result === 'O'.repeat(this.tableSize)) {
			return 'O';
		}
		else {
			return null;
		}
	}
	
	getWinnerHorizontal = (rowDataArray) => {
		for(let i = 0 ; i < this.tableSize ; i++) {
			let result = '';

			for(let j = 0 ; j < this.tableSize ; j++) {
				const data = rowDataArray[i].cellDataArray[j].data;
				result += data;
			}

			const winner = this.checkWinnerWithResult(result)
			if(winner) {
				return winner;
			}
		}

		return null;
	}

	getWinnerVertical = (rowDataArray) => {
		for(let i = 0 ; i < this.tableSize ; i++) {
			let result = '';

			for(let j = 0 ; j < this.tableSize ; j++) {
				const data = rowDataArray[j].cellDataArray[i].data;
				result += data;
			}

			const winner = this.checkWinnerWithResult(result)
			if(winner) {
				return winner;
			}
		}

		return null;
	}

	getWinnerDiagonal01 = (rowDataArray) => {
		let result = '';

		for(let i = 0 ; i < this.tableSize ; i++) {
			const data = rowDataArray[i].cellDataArray[i].data;
			result += data;
		}

		const winner = this.checkWinnerWithResult(result)
		if(winner) {
			return winner;
		}

		return null;
	}

	getWinnerDiagonal02 = (rowDataArray) => {
		let result = '';

		for(let i = 0 ; i < this.tableSize ; i++) {
			const data = rowDataArray[this.tableSize - 1 - i].cellDataArray[i].data;
			result += data;
		}
		
		const winner = this.checkWinnerWithResult(result)
		if(winner) {
			return winner;
		}

		return null;
	}

	getWinnerAll = (turn, rowDataArray) => {
		//check horizontal win
		const winner_h = this.getWinnerHorizontal(rowDataArray)
		if(winner_h) {
			return winner_h;
		}

		//check vertical win
		const winner_v = this.getWinnerVertical(rowDataArray)
		if(winner_v) {
			return winner_v;
		}

		//check diagonal 1 win
		const winner_d1 = this.getWinnerDiagonal01(rowDataArray)
		if(winner_d1) {
			return winner_d1;
		}

		//check diagonal 2 win
		const winner_d2 = this.getWinnerDiagonal02(rowDataArray)
		if(winner_d2) {
			return winner_d2;
		}

		//not found winner
		if(turn < this.maxTurn) {
			return null;
		}
		else {
			//last turn
			return '';
		}
	}

	alertWinnerIfGameEnd = (turn, rowDataArray) => {
		const winner = this.getWinnerAll(turn, rowDataArray);
		if(typeof(winner) === 'string') {
			if(winner === '') {
				alert('No Winner');
			}
			else {
				alert('Winner is ' + winner);
			}
		}
	}
	
	updateStateOnSetNewCellData = (rowId, cellId) => {
		const newData = (this.state.turn % 2 === 0) ? "O" : "X";
		const newCellData = {...this.state.rowDataArray[rowId].cellDataArray[cellId], data: newData};
		const newCellDataArray = this.replaceIndex(this.state.rowDataArray[rowId].cellDataArray, cellId, newCellData);

		const newRowData = {...this.state.rowDataArray[rowId], cellDataArray: newCellDataArray};
		const newRowDataArray = this.replaceIndex(this.state.rowDataArray, rowId, newRowData);

		const winner = this.getWinnerAll(this.state.turn, newRowDataArray);

		const newTurn = this.state.turn + 1;
		const newGameState = typeof(winner) === 'string' ? 1 : 0;
		const newState = {...this.state, turn: newTurn, gameState: newGameState, rowDataArray: newRowDataArray};
		return newState;
	}
	
	replaceCellData = (rowId, cellId) => {
		const newState = this.updateStateOnSetNewCellData(rowId, cellId);
		this.setState(newState);
	}

	cellClickHandler = (rowId, cellId) => () => {
		if(this.isRowAndCellIndexOutOfBound(rowId, cellId)) {
			return;
		}
		if(this.gameStateArray[this.state.gameState] === this.GameStateEnd) {
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

	componentDidUpdate() {
		setTimeout(() => {
			this.alertWinnerIfGameEnd(this.state.turn-1, this.state.rowDataArray);
		}, 100);
	}
}

export default Box;

import React, { Component } from 'react';
import Row from '../Row/Row.component';
import uuid from 'uuid';

class Box extends Component {

	state = {
		turn: 1,
		rowDataArray: [
			{
				rowId: uuid(),
				cellDataArray: [
					{
						cellId: uuid(),
						data: ""
					},
					{
						cellId: uuid(),
						data: ""
					},
					{
						cellId: uuid(),
						data: ""
					}
				]
			},
			{
				rowId: uuid(),
				cellDataArray: [
					{
						cellId: uuid(),
						data: ""
					},
					{
						cellId: uuid(),
						data: ""
					},
					{
						cellId: uuid(),
						data: ""
					}
				]
			},
			{
				rowId: uuid(),
				cellDataArray: [
					{
						cellId: uuid(),
						data: ""
					},
					{
						cellId: uuid(),
						data: ""
					},
					{
						cellId: uuid(),
						data: ""
					}
				]
			}
		]
	}
	
	cellClickHandler = (cellId) => () => {
		if(this.state.turn > 9) {
			console.log('GAME END : can not play anymore');
		}
		else {
			const newState = this.state;
	
			for(let i = 0 ; i < newState.rowDataArray.length ; i++) {
				const rowData = newState.rowDataArray[i];
				const targetCell = rowData.cellDataArray.find((element) => {
					return element.cellId === cellId && element.data === "";
				});
	
				if(targetCell) {
					targetCell.data = (this.state.turn % 2 === 0) ? "O" : "X";
					newState.turn++;
					this.setState(newState);
					break;
				}
			}
		}
	};

	mapRowWithKey = (element) => {
		return <Row key={element.rowId} cellDataArray={element.cellDataArray} cellClickHandler={this.cellClickHandler}/>
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

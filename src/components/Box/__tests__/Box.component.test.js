import React from 'react';
import Box from '../Box.component';
import Row from '../../Row/Row.component';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('Box Component', () => {

	let boxComp;
	let boxInstance;
	
	beforeEach(() => {
		boxComp = <Box />;
		
		const wrapper = shallow(boxComp);
		boxInstance = wrapper.instance();
	});

	it('render correctly with data', () => {
		// const initialState = {
		// 	turn: 9,
		// 	gameState: 1,
		// 	rowDataArray: [
		// 		{
		// 			rowId: 0,
		// 			cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'X'}]
		// 		},
		// 		{
		// 			rowId: 1,
		// 			cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'O'}]
		// 		},
		// 		{
		// 			rowId: 2,
		// 			cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
		// 		}
		// 	]
		// };
		// boxInstance.setState(initialState);
		const snapshot = renderer.create(boxComp).toJSON();
		expect(snapshot).toMatchSnapshot();
	});
	
	it('render correctly with empty', () => {
		const snapshot = renderer.create(boxComp).toJSON();
		expect(snapshot).toMatchSnapshot();
	});

	it('isRowAndCellIndexOutOfBound with rowId, cellId of 0, 0 should return false', () => {
		const result = boxInstance.isRowAndCellIndexOutOfBound(0, 0);
		expect(result).toBe(false);
	});

	it('isRowAndCellIndexOutOfBound with rowId, cellId of 3, 1 should return true', () => {
		const result = boxInstance.isRowAndCellIndexOutOfBound(3, 1);
		expect(result).toBe(true);
	});
	
	it('checkWinnerWithResult of XXX should return X', () => {
		const result = boxInstance.checkWinnerWithResult('XXX');
		expect(result).toBe('X');
	});

	it('checkWinnerWithResult of OOO should return O', () => {
		const result = boxInstance.checkWinnerWithResult('OOO');
		expect(result).toBe('O');
	});

	it('checkWinnerWithResult of XX should return null', () => {
		const result = boxInstance.checkWinnerWithResult('XX');
		expect(result).toBeNull();
	});

	it('getWinnerHorizontal with rowDataArray of X is winner', () => {
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'O'}, {cellId: 2, data: ''}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			}
		];
		const result = boxInstance.getWinnerHorizontal(rowDataArray);
		expect(result).toBe('X');
	});

	it('getWinnerHorizontal with rowDataArray of no winner', () => {
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: ''}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			}
		];
		const result = boxInstance.getWinnerHorizontal(rowDataArray);
		expect(result).toBeNull();
	});

	it('getWinnerVertical with rowDataArray of X is winner', () => {
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: 'O'}, {cellId: 2, data: ''}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: 'O'}, {cellId: 2, data: ''}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			}
		];
		const result = boxInstance.getWinnerVertical(rowDataArray);
		expect(result).toBe('X');
	});

	it('getWinnerVertical with rowDataArray of no winner', () => {
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: ''}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			}
		];
		const result = boxInstance.getWinnerVertical(rowDataArray);
		expect(result).toBeNull();
	});

	it('getWinnerDiagonal01 with rowDataArray of X is winner', () => {
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: ''}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: ''}, {cellId: 2, data: 'X'}]
			}
		];
		const result = boxInstance.getWinnerDiagonal01(rowDataArray);
		expect(result).toBe('X');
	});

	it('getWinnerDiagonal01 with rowDataArray of no winner', () => {
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: ''}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			}
		];
		const result = boxInstance.getWinnerDiagonal01(rowDataArray);
		expect(result).toBeNull();
	});

	it('getWinnerDiagonal02 with rowDataArray of X is winner', () => {
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: ''}, {cellId: 2, data: 'X'}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'X'}, {cellId: 2, data: ''}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'O'}]
			}
		];
		const result = boxInstance.getWinnerDiagonal02(rowDataArray);
		expect(result).toBe('X');
	});

	it('getWinnerDiagonal02 with rowDataArray of no winner', () => {
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: ''}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			}
		];
		const result = boxInstance.getWinnerDiagonal02(rowDataArray);
		expect(result).toBeNull();
	});

	it('getWinnerAll with turn, rowDataArray of X is winner (Horizontal)', () => {
		const turn = 6;
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
			}
		];
		const result = boxInstance.getWinnerAll(turn, rowDataArray);
		expect(result).toBe('X');
	});

	it('getWinnerAll with turn, rowDataArray of X is winner (Vertical)', () => {
		const turn = 6;
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: ''}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: ''}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'X'}, {cellId: 2, data: ''}]
			}
		];
		const result = boxInstance.getWinnerAll(turn, rowDataArray);
		expect(result).toBe('X');
	});

	it('getWinnerAll with turn, rowDataArray of X is winner (Diagonal01)', () => {
		const turn = 6;
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: ''}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: ''}, {cellId: 2, data: 'X'}]
			}
		];
		const result = boxInstance.getWinnerAll(turn, rowDataArray);
		expect(result).toBe('X');
	});

	it('getWinnerAll with turn, rowDataArray of X is winner (Diagonal02)', () => {
		const turn = 6;
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: ''}, {cellId: 2, data: 'X'}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: ''}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			}
		];
		const result = boxInstance.getWinnerAll(turn, rowDataArray);
		expect(result).toBe('X');
	});

	it('getWinnerAll with turn, rowDataArray of no winner (playing)', () => {
		const turn = 6;
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: ''}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
			}
		];
		const result = boxInstance.getWinnerAll(turn, rowDataArray);
		expect(result).toBeNull();
	});

	it('getWinnerAll with turn, rowDataArray of no winner (game end)', () => {
		const turn = 10;
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'O'}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'X'}]
			}
		];
		const result = boxInstance.getWinnerAll(turn, rowDataArray);
		expect(result).toBe('');
	});

	it('alertWinnerIfGameEnd with turn, rowDataArray of X is winner', () => {
		const turn = 10;
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'O'}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'O'}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
			}
		];
		const result = boxInstance.alertWinnerIfGameEnd(turn, rowDataArray);
		expect(result).toBeUndefined();
	});

	it('alertWinnerIfGameEnd with turn, rowDataArray of no winner (playing)', () => {
		const turn = 8;
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'O'}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'X'}]
			}
		];
		const result = boxInstance.alertWinnerIfGameEnd(turn, rowDataArray);
		expect(result).toBeUndefined();
	});

	it('alertWinnerIfGameEnd with turn, rowDataArray of no winner (game end)', () => {
		const turn = 10;
		const rowDataArray = [
			{
				rowId: 0,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'O'}]
			},
			{
				rowId: 1,
				cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
			},
			{
				rowId: 2,
				cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'X'}]
			}
		];
		const result = boxInstance.alertWinnerIfGameEnd(turn, rowDataArray);
		expect(result).toBeUndefined();
	});

	it('updateStateOnSetNewCellData with rowId, cellId of O', () => {
		const initialState = {
			turn: 8,
			gameState: 0,
			rowDataArray: [
				{
					rowId: 0,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'O'}]
				},
				{
					rowId: 1,
					cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
				},
				{
					rowId: 2,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'X'}]
				}
			]
		};
		Object.freeze(initialState);

		const wrapper = shallow(boxComp);
		wrapper.setState(initialState);
		boxInstance = wrapper.instance();

		const newState = boxInstance.updateStateOnSetNewCellData(0, 0);

		const expectedState = {
			turn: 9,
			gameState: 0,
			rowDataArray: [
				{
					rowId: 0,
					cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'O'}]
				},
				{
					rowId: 1,
					cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
				},
				{
					rowId: 2,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'X'}]
				}
			]
		};
		expect(newState).toEqual(expectedState);
		expect(initialState.rowDataArray[0].cellDataArray[0].data).toBe('');
	});

	it('updateStateOnSetNewCellData with rowId, cellId of X', () => {
		const initialState = {
			turn: 9,
			gameState: 0,
			rowDataArray: [
				{
					rowId: 0,
					cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'O'}]
				},
				{
					rowId: 1,
					cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
				},
				{
					rowId: 2,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'X'}]
				}
			]
		};
		Object.freeze(initialState);

		const wrapper = shallow(boxComp);
		wrapper.setState(initialState);
		boxInstance = wrapper.instance();

		const newState = boxInstance.updateStateOnSetNewCellData(2, 0);

		const expectedState = {
			turn: 10,
			gameState: 1,
			rowDataArray: [
				{
					rowId: 0,
					cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'O'}]
				},
				{
					rowId: 1,
					cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
				},
				{
					rowId: 2,
					cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'X'}]
				}
			]
		};
		expect(newState).toEqual(expectedState);
		expect(initialState.rowDataArray[2].cellDataArray[0].data).toBe('');
	});

	it('replaceCellData with rowId, cellId', () => {
		const initialState = {
			turn: 8,
			gameState: 0,
			rowDataArray: [
				{
					rowId: 0,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'O'}]
				},
				{
					rowId: 1,
					cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
				},
				{
					rowId: 2,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'X'}]
				}
			]
		};
		Object.freeze(initialState);

		const wrapper = shallow(boxComp);
		wrapper.setState(initialState);
		boxInstance = wrapper.instance();

		boxInstance.replaceCellData(0, 0);

		const expectedState = {
			turn: 9,
			gameState: 0,
			rowDataArray: [
				{
					rowId: 0,
					cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'O'}]
				},
				{
					rowId: 1,
					cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
				},
				{
					rowId: 2,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'X'}]
				}
			]
		};
		expect(wrapper.state()).toEqual(expectedState);
		expect(initialState.rowDataArray[0].cellDataArray[0].data).toBe('');
	});

	it('cellClickHandler with rowId, cellId (isRowAndCellIndexOutOfBound)', () => {
		const initialState = {
			turn: 8,
			gameState: 0,
			rowDataArray: [
				{
					rowId: 0,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'O'}]
				},
				{
					rowId: 1,
					cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
				},
				{
					rowId: 2,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'X'}]
				}
			]
		};
		const wrapper = shallow(boxComp);
		wrapper.setState(initialState);
		boxInstance = wrapper.instance();

		boxInstance.cellClickHandler(3, 0)();

		const expectedState = {
			turn: 8,
			gameState: 0,
			rowDataArray: [
				{
					rowId: 0,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'O'}]
				},
				{
					rowId: 1,
					cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
				},
				{
					rowId: 2,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'X'}]
				}
			]
		};
		expect(wrapper.state()).toEqual(expectedState);
	});

	it('cellClickHandler with rowId, cellId (GameStateEnd)', () => {
		const initialState = {
			turn: 9,
			gameState: 1,
			rowDataArray: [
				{
					rowId: 0,
					cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'O'}]
				},
				{
					rowId: 1,
					cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
				},
				{
					rowId: 2,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'X'}]
				}
			]
		};
		const wrapper = shallow(boxComp);
		wrapper.setState(initialState);
		boxInstance = wrapper.instance();

		boxInstance.cellClickHandler(2, 0)();

		const expectedState = {
			turn: 9,
			gameState: 1,
			rowDataArray: [
				{
					rowId: 0,
					cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'O'}]
				},
				{
					rowId: 1,
					cellDataArray: [{cellId: 0, data: 'O'}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'X'}]
				},
				{
					rowId: 2,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'O'}, {cellId: 2, data: 'X'}]
				}
			]
		};
		expect(wrapper.state()).toEqual(expectedState);
	});

	it('cellClickHandler with rowId, cellId (success)', () => {
		const initialState = {
			turn: 1,
			gameState: 0,
			rowDataArray: [
				{
					rowId: 0,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
				},
				{
					rowId: 1,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
				},
				{
					rowId: 2,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
				}
			]
		};
		Object.freeze(initialState);

		const wrapper = shallow(boxComp);
		wrapper.setState(initialState);
		boxInstance = wrapper.instance();

		boxInstance.cellClickHandler(0, 0)();

		const expectedState = {
			turn: 2,
			gameState: 0,
			rowDataArray: [
				{
					rowId: 0,
					cellDataArray: [{cellId: 0, data: 'X'}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
				},
				{
					rowId: 1,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
				},
				{
					rowId: 2,
					cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: ''}, {cellId: 2, data: ''}]
				}
			]
		};
		expect(wrapper.state()).toEqual(expectedState);
		expect(initialState.rowDataArray[0].cellDataArray[0].data).toBe('');
	});

	it('get row component', () => {
		const rowData = {
			rowId: 0,
			cellDataArray: [{cellId: 0, data: ''}, {cellId: 1, data: 'X'}, {cellId: 2, data: 'O'}]
		};
		const rowComp = boxInstance.mapRowWithKey(rowData);

		const expected = <Row key={rowData.rowId} rowId={rowData.rowId} cellDataArray={rowData.cellDataArray} cellClickHandler={boxInstance.cellClickHandler}/>
		expect(rowComp).toEqual(expected);
	});
});

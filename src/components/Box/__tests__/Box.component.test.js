import React from 'react';
import Box from '../Box.component';
import Row from '../../Row/Row.component';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('Box Component', () => {

	let data = [];
	let tmpBoxComp;
	let instance = null;
	
	beforeEach(() => {
		data = [
			{
				rowId: "R001",
				data: ["O", "X", "O"]
			},
			{
				rowId: "R002",
				data: ["X", "O", "O"]
			},
			{
				rowId: "R003",
				data: ["X", "X", "O"]
			}
		];
		tmpBoxComp = <Box rowData={data} />;
		
		const wrapper = shallow(tmpBoxComp);
		instance = wrapper.instance();
	});

	it('render correctly', () => {
		const snapshot = renderer.create(tmpBoxComp).toJSON();
		expect(snapshot).toMatchSnapshot();
	});
	
	it('cell click handler', () => {
		const text = 'T';
		const logContainerFunc = instance.cellClickHandler(text);
		expect(logContainerFunc()).toBe(text);
	});
	
	it('get row component', () => {
		const rowData = {
			rowId: "id001",
			data: ["O", "X", "O"]
		};
		const rowComp = instance.mapRowWithKey(rowData);
	
		const expected = <Row key={rowData.rowId} cellData={rowData.data} cellClickHandler={instance.cellClickHandler}/>;
		expect(rowComp).toEqual(expected);
	});
});

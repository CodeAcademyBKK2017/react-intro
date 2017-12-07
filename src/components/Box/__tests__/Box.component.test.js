import React from 'react';
import Box from '../Box.component';
import Row from '../../Row/Row.component';
import renderer from 'react-test-renderer';
import uuid from 'uuid';
import {shallow} from 'enzyme';

const data = [
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

test('Box', () => {
	const snapshot = renderer.create(<Box rowData={data} />).toJSON();
	expect(snapshot).toMatchSnapshot();
});

test('Box: click handler', () => {
	const wrapper = shallow(<Box rowData={data} />);
	const instance = wrapper.instance();
	
	const text = 'T';
	const logContainerFunc = instance.cellClickHandler(text);
	expect(logContainerFunc()).toBe(text);
});

test('Box: get row component', () => {
	const wrapper = shallow(<Box rowData={data} />);
	const instance = wrapper.instance();
	
	const rowData = {
		rowId: "id001",
		data: ["O", "X", "O"]
	};
	const rowComp = instance.mapRowWithKey(rowData);

	const expected = <Row key={rowData.rowId} cellData={rowData.data} cellClickHandler={instance.cellClickHandler}/>;
	expect(rowComp).toEqual(expected);
});

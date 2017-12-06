import React from 'react';
import Box from '../Box.component';
import renderer from 'react-test-renderer';
import uuid from 'uuid';
import {shallow} from 'enzyme';

test('Box', () => {
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
	const snapshot = renderer.create(<Box rowData={data} />).toJSON();
	expect(snapshot).toMatchSnapshot();
});

test('Box: click', () => {
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
	const wrapper = shallow(<Box rowData={data} />);
	const instance = wrapper.instance();
	
	const text = 'T';
	const logContainerFunc = instance.cellClickHandler(text);
	// expect(logContainerFunc()).toBe(`new cell clicked ${text}`);
	expect(logContainerFunc()).toBe(text);
});

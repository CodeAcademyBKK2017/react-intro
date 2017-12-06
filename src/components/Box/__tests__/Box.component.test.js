import React from 'react';
import Box from '../Box.component';
import renderer from 'react-test-renderer';
import uuid from 'uuid';

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

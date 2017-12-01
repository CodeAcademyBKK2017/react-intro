import React from 'react';
import Box from '../Box.component';
import renderer from 'react-test-renderer';

test('Box', () => {
	const data = [
		['X', 'O', 'X'],
		['O', 'X', 'O'],
		['X', 'O', 'X']
	];
	const snapshot = renderer.create(<Box rowData={data} />).toJSON();
	expect(snapshot).toMatchSnapshot();
});

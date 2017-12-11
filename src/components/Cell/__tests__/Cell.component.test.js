import React from 'react';
import Cell from '../Cell.component';
import renderer from 'react-test-renderer';

describe('Cell Component', () => {
	it('render correctly with X', () => {
		const data = 'X';
		const snapshot = renderer.create(<Cell data={data} />).toJSON();
		expect(snapshot).toMatchSnapshot();
	});

	it('render correctly with O', () => {
		const data = 'O';
		const snapshot = renderer.create(<Cell data={data} />).toJSON();
		expect(snapshot).toMatchSnapshot();
	});
});

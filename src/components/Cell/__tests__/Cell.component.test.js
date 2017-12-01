import React from 'react';
import Cell from '../Cell.component';
import renderer from 'react-test-renderer';

test('Cell O', () => {
	const data = 'O';
	const snapshot = renderer.create(<Cell text={data} />).toJSON();
	// const snapshot = renderer
	// 	.create(<Link page="http://www.facebook.com">Facebook</Link>)
	// 	.toJSON();
	expect(snapshot).toMatchSnapshot();
});

test('Cell X', () => {
	const data = 'X';
	const snapshot = renderer.create(<Cell text={data} />).toJSON();
	expect(snapshot).toMatchSnapshot();
});

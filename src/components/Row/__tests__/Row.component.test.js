import React from 'react';
import Row from '../Row.component';
import renderer from 'react-test-renderer';

test('Row OXO', () => {
	const data = ['O', 'X', 'O'];
	const snapshot = renderer.create(<Row value={data} />);
	expect(snapshot).toMatchSnapshot();
});

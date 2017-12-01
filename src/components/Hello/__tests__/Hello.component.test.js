import React from 'react';
import Hello from '../Hello.component';
import renderer from 'react-test-renderer';

test('Hello', () => {
	const data = 'chong';
	const snapshot = renderer.create(<Hello name={data} />).toJSON();
	expect(snapshot).toMatchSnapshot();
});

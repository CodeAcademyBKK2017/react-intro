import React from 'react';
import Row from '../Row.component';
import Cell from '../../Cell/Cell.component';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('Row Component', () => {
	it('render correctly with XOX', () => {
		const cellDataArray = [
			{
				cellId: 0,
				data: 'X'
			},
			{
				cellId: 1,
				data: 'O'
			},
			{
				cellId: 2,
				data: 'X'
			}
		]
		const snapshot = renderer.create(<Row cellDataArray={cellDataArray} />).toJSON();
		expect(snapshot).toMatchSnapshot();
	});

	it('render correctly with empty', () => {
		const snapshot = renderer.create(<Row />).toJSON();
		expect(snapshot).toMatchSnapshot();
	});

	it('get cell component', () => {
		const rowProps = {
			rowId: 1
		};
		const wrapper = shallow(<Row rowId={rowProps.rowId} />);
		const rowInstance = wrapper.instance();

		const cellData = {
			cellId: 0,
			data: 'X'
		};
		const cellComp = rowInstance.mapCellWithKey(cellData);

		const expected = <Cell key={cellData.cellId} rowId={rowProps.rowId} cellId={cellData.cellId} data={cellData.data} />;
		expect(cellComp).toEqual(expected);
	});
});

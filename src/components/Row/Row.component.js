import React from 'react';
import Cell from '../Cell/Cell.component';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

// class Row extends Component {
// 	render() {
// 		const {cellData, cellClickHandler} = this.props;

// 		return (
// 			<div>
// 				<Cell text={cellData[0]} cellClickHandler={cellClickHandler}/>
// 				<Cell text={cellData[1]} cellClickHandler={cellClickHandler}/>
// 				<Cell text={cellData[2]} cellClickHandler={cellClickHandler}/>
// 			</div>
// 		);
// 	}
// }

const Row = ({cellData, cellClickHandler}) => {
	return (
		<div>
			<Cell text={cellData[0]} cellClickHandler={cellClickHandler}/>
			<Cell text={cellData[1]} cellClickHandler={cellClickHandler}/>
			<Cell text={cellData[2]} cellClickHandler={cellClickHandler}/>
		</div>
	);
}

Row.propTypes = {
	cellData: PropTypes.array.isRequired,
	cellClickHandler: PropTypes.func.isRequired
};

Row.defaultProps = {
	cellData: ['O', 'O', 'O'],
	cellClickHandler: noop
};

export default Row;

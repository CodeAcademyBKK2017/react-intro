
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell/Cell.component';
import noop from 'lodash/noop';

class Row extends Component {
    render() {
        const {data, cellClickHandler} = this.props;

        return (
            <div>
                <Cell title={data[0]} cellClickHandler={cellClickHandler} />
                <Cell title={data[1]} cellClickHandler={cellClickHandler} />
                <Cell title={data[2]} cellClickHandler={cellClickHandler} />
            </div>
        )
    }
}

Row.propTypes = {
  cellClickHandler: PropTypes.func.isRequired
}

Row.defaultProps = {
  cellClickHandler: noop
}

export default Row;

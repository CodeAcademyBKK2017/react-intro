// Import React, {Component} from 'react';
import React from "react";
import Cell from "../Cell/Cell.components";

import PropTypes from "prop-types";
import noop from "lodash/noop";

const Row = ({cellData, cellClickHandler, keyRow}) => {
    const style = {"marginTop": "44px"};
    return (
        <div style={style}>
            <Cell name={ cellData[0] } cellClickHandler={cellClickHandler(keyRow, 0)}/>
            <Cell name={ cellData[1] } cellClickHandler={cellClickHandler(keyRow, 1)}/>
            <Cell name={ cellData[2] } cellClickHandler={cellClickHandler(keyRow, 2)}/>
        </div>
    );
};

Row.propTypes = {
    "cellClickHandler": PropTypes.func.isRequired,
    "cellData": PropTypes.array.isRequired,
    "keyRow": PropTypes.string.isRequired
};
Row.defaultProps = {
    "cellData": [],
    "cellClickHandler": noop,
    "keyRow": ''
};

export default Row;

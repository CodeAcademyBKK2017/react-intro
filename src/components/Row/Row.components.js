// Import React, {Component} from 'react';
import React from "react";
import Cell from "../Cell/Cell.components";

import PropTypes from "prop-types";
import noop from "lodash/noop";

const Row = ({cellData, cellClickHandler}) => {

    const style = {"marginTop": "44px"};
    return (
        <div style={style}>
            <Cell name={ cellData[0] } cellClickHandler={cellClickHandler}/>
            <Cell name={ cellData[1] } cellClickHandler={cellClickHandler}/>
            <Cell name={ cellData[2] } cellClickHandler={cellClickHandler}/>
        </div>
    );

};

Row.propTypes = {
    "cellClickHandler": PropTypes.func.isRequired,
    "cellData": PropTypes.array.isRequired
};
Row.defaultProps = {
    "cellData": [],
    "cellClickHandler": noop
};

export default Row;

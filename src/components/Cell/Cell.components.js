// Import React, {Component} from 'react';
import React from "react";
import "./Cell.css";

import PropTypes from "prop-types";
import noop from "lodash/noop";

const Cell = ({name, cellClickHandler}) => <div className="cell-box"
    onClick={cellClickHandler}>
    { name }
</div>;

Cell.propTypes = {
    "cellClickHandler": PropTypes.func.isRequired,
    "name": PropTypes.string.isRequired
};
Cell.defaultProps = {
    "cellClickHandler": noop,
    "name": ""
};

export default Cell;

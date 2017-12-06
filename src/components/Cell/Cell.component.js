import "./Cell.style.css";
import PropTypes from "prop-types";
import React from "react";
import noop from "lodash/noop";
const Cell = ({value, cellclickHandler}) =>
    <div className="Cell" onClick={cellclickHandler(value.cell)}>{value.cell}</div>;
Cell.propTypes = {
    "cellclickHandler": PropTypes.func.isRequired,
    "value": PropTypes.oneOf([
        "X",
        "O"
    ]).isRequired
};
Cell.defaultProps = {
    "cellclickHandler": noop,
    "value": ""
};
export default Cell;

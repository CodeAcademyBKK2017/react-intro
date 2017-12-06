import Cell from "../Cell/Cell.component";
import PropTypes from "prop-types";
import React from "react";
import noop from "lodash/noop";

const Row = ({cellData, cellclickHandler}) =>
    <div>
        <Cell value={cellData[0]} cellclickHandler={cellclickHandler}/>
        <Cell value={cellData[1]} cellclickHandler={cellclickHandler}/>
        <Cell value={cellData[2]} cellclickHandler={cellclickHandler}/>
    </div>;
Row.propTypes = {
    "cellclickHandler": PropTypes.func.isRequired,
    "cellData": PropTypes.array.isRequired
};
Row.defaultProps = {
    "cellclickHandler": noop,
    "cellData": ""
};
export default Row;

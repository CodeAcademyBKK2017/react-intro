import React from "react";
import Cell from "../Cell/Cell.component";
import PropTypes from "prop-types";
import noop from "lodash/noop";

class Row extends React.Component {

    render () {

        const {data} = this.props;
        const willData = data.map((row, index) => <Cell willData = {row}
            key = {index} cellclickHandler={this.props.cellclickHandler}/>);
        return (
            <div style={{"textAlign": "center"}}>
                {willData}
            </div>
        );

    }

}
Row.propTypes = {
    "cellclickHandler": PropTypes.func.isRequired,
    "data": PropTypes.array.isRequired
};
Row.defaultProps = {"cellclickHandler": noop};
export default Row;

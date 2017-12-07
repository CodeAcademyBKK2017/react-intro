import React, {Component} from "react";
import PropTypes from "prop-types";
import Row from "../Row/Row.components";
import noop from "lodash/noop";
class Box extends Component {

    cellClickHandler = (cellValue) => () => {

        console.log("cell clicked :: ", cellValue);

    }

    render () {

        const {rowData} = this.props;
        const rows = rowData.map((obj, index) => <Row cellData={ obj.arr }
            key={obj.key} cellClickHandler={this.cellClickHandler}/>);
        return (
            <div>
                {rows}
            </div>
        );

    }

}


Box.propTypes = {"rowData": PropTypes.array.isRequired};
Box.defaultProps = {"cellData": []};

export default Box;

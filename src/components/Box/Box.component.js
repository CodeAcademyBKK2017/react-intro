import PropTypes from "prop-types";
import React, {Component} from "react";
import Row from "../Row/Row.component";
class Box extends Component {

    cellclickHandler (cellValue) {

        return () => {
            // Console.log("This Cell was click and value is", this.cellValue);

        };

    }

    render () {

        const {boxData} = this.props;
        // Console.log(boxData);
        const rows = boxData.map((rowData) => <Row cellData={rowData.items} key={rowData.id} cellclickHandler={this.cellclickHandler}/>);
        return (
            <div>
                {rows}
            </div>
        );

    }

}
Box.propTypes = {"boxData": PropTypes.array.isRequired};
Box.defaultProps = {"boxData": []};
export default Box;

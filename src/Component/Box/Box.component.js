import React from "react";
import Row from "../Row/Row.component";
import PropTyle from "prop-types";

class Hello extends React.Component {

    cellclickHandler=(celData) => () => {

        console.log("cellclickHandler", celData);
        return celData;

    }

    render () {

        const {data} = this.props;
        const rows = data.map((row) => <Row class="row" data ={row.value}
            key = {row.key} cellclickHandler={this.cellclickHandler}/>);
        return (
            <div>
                {rows}

            </div>
        );

    }

}
Hello.propTypes = {"data": PropTyle.array.isRequired};
export default Hello;

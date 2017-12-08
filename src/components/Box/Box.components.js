import React, {Component} from "react";
import Row from "../Row/Row.components";
import uuid from "uuid";

class Box extends Component {
    state = { //data
        data: [
            {
                "arr": ['','',''],
                "keyRow": uuid()
            },
            {
                "arr": ['','',''],
                "keyRow": uuid()
            },
            {
                "arr": ['','',''],
                "keyRow": uuid()
            }
        ],
        count: 1
    }
    cellClickHandler = (keyRow, cellIndex) => () => { //keep data in state and data and logic in one file
        const foundRow = this.state.data.find((rowData)=> {
            return rowData.keyRow === keyRow;
        });
        const rowIndex = this.state.data.indexOf(foundRow);
        let count = 1;
        if(foundRow.arr[cellIndex] === ''){
            if(this.state.count === 1){
                foundRow.arr[cellIndex] = 'X';
                count = 2;
            }else{
                foundRow.arr[cellIndex] = 'O';
                count = 1;
            }
            const newData = [...this.state.data];
            newData[rowIndex] = foundRow;
            this.setState({data: newData, count: count});
        }
    }

    render () {
        console.log("render");
        const {data} = this.state;
        console.log(data);
        const rows = data.map((obj, index) => <Row cellData={ obj.arr } 
            keyRow={obj.keyRow} key={obj.keyRow} cellClickHandler={this.cellClickHandler}/>);
        return (
            <div>
                {rows}
            </div>
        );
    }
}


Box.propTypes = {};
Box.defaultProps = {};

export default Box;

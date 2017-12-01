import React,{Component} from 'react'
import Cell from '../Cell/Cell.component'
class Row extends Component{
    render(){

        return (
            <div>
                <Cell value={this.props.cellData[0]}/>
                <Cell value={this.props.cellData[1]}/>
                <Cell value={this.props.cellData[2]}/>
            </div>
            );
    }
}

export default Row
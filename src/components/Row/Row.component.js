import React,{Component} from 'react'
import Cell from '../Cell/Cell.component'
class Row extends Component{
    render(){
        const {cellData,cellclickHandler} = this.props ;
        return (
            <div>
                <Cell value={cellData[0]} cellclickHandler={cellclickHandler}/>
                <Cell value={cellData[1]} cellclickHandler={cellclickHandler}/>
                <Cell value={cellData[2]} cellclickHandler={cellclickHandler}/>
            </div>
            );
    }
}

export default Row
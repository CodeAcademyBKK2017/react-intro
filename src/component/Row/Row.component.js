import React,{Component} from 'react'
import Cell from './Cell.component'
class Row extends Component{
    render(){
        return (
            <div>
                <Cell/>
                <Cell/>
                <Cell/>
            </div>
            )
        
    }
}

export default Row
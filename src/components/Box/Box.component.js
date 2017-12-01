import React,{Component} from 'react'
import Row from '../Row/Row.component'
class Box extends Component{
    render(){
        return ( 
            <div>
                <Row cellData={['O','X','O']}/>
                <Row cellData={['X','O','O']}/>
                <Row cellData={['X','X','O']}/>
            </div>
        )
    }
}
export default Box
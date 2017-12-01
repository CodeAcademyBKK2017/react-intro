import React,{Component} from 'react'
import Row from '../Row/Row.component'
class Box extends Component{
    // cellclickHandler = ()=>{
    //     //class properties ES7
    //     console.log('Cell clicked')
    // }
    cellclickHandler(){
        //class properties
        console.log('Cell clicked')
    }
    render(){
        return ( 
            <div>
                <Row cellData={this.props.boxData[0]} cellclickHandler={this.cellclickHandler}/>
                <Row cellData={this.props.boxData[1]} cellclickHandler={this.cellclickHandler}/>
                <Row cellData={this.props.boxData[2]} cellclickHandler={this.cellclickHandler}/>
            </div>
        )
    }
}
export default Box
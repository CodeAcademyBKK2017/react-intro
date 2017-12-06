import React ,{Component}from 'react';
import Row from '../Row/Row.component'
// class Hello extends Component{
//     cellclickHandler=(celData)=>{
//         return()=>{
//             console.log('cellclickHandler',celData);
//         }
        
//     }
//     render(){
    
//         return(
//             <div>
//                 <Row class='row' data ={this.props.data[0]} cellclickHandler={this.cellclickHandler}/> 
//                 <Row class='row' data ={this.props.data[1]} cellclickHandler={this.cellclickHandler}/> 
//                 <Row class='row' data ={this.props.data[2]} cellclickHandler={this.cellclickHandler}/> 
//             </div> 
//         )
//     }
// }
const Hello  =(props)=>{
    const cellclickHandler=(celData) => console.log('cellclickHandler',celData);
            
    return(
        <div>
            <Row class='row' data ={props.data[0]} cellclickHandler={cellclickHandler}/> 
            <Row class='row' data ={props.data[1]} cellclickHandler={cellclickHandler}/> 
            <Row class='row' data ={props.data[2]} cellclickHandler={cellclickHandler}/> 
        </div> 
    )
}
export default Hello;

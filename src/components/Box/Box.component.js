import React from 'react';
import Row from '../Row/Row.component';
// class Box extends React.Component{
//     clickHandler=(text)=>()=>{
//             console.log('Clicked is',text);
//     }
//     render(){
//         //const click = this.props;
//         return(
//             <div style={{textAlign:'center'}}>
//                 <Row willData={this.props.data[0]} clickHandler={this.clickHandler}/>
//                 <Row willData={this.props.data[1]} clickHandler={this.clickHandler}/>
//                 <Row willData={this.props.data[2]} clickHandler={this.clickHandler}/>
//             </div>
//         );
//     }
// }
const Box = (props) => {
    const clickHandler=(text)=>console.log('Clicked is',text);
    return(
        <div style={{textAlign:'center'}}>
            <Row willData={props.data[0]} clickHandler={clickHandler}/>
            <Row willData={props.data[1]} clickHandler={clickHandler}/>
            <Row willData={props.data[2]} clickHandler={clickHandler}/>
        </div>
    )
}
export default Box;
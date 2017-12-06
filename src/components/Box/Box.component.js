import React from 'react';
import Row from '../Row/Row.component';
class Box extends React.Component{
    clickHandler=(text)=>()=>{
            console.log('Clicked is',text);
    }
    render(){
        const data = this.props.data;
        const rows = data.map((rowsData,i)=>{
            return <Row willData={rowsData.value} key={rowsData.key} clickHandler={this.clickHandler}/>
        });
        return(
            <div style={{textAlign:'center'}}>
                {rows}
            </div>
        );
    }
}
export default Box;
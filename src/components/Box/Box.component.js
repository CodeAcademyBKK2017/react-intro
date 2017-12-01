import React from 'react';
import Row from '../Row/Row.component';
class Box extends React.Component{
    clickHandler(){
        console.log('Clicked');
    }
    render(){
        //const click = this.props;
        return(
            <div style={{textAlign:'center'}}>
                <Row willData={this.props.data[0]} clickHandler={this.clickHandler}/>
                <Row willData={this.props.data[1]} clickHandler={this.clickHandler}/>
                <Row willData={this.props.data[2]} clickHandler={this.clickHandler}/>
            </div>
        );
    }
}
export default Box;
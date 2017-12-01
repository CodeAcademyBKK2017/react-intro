import React from 'react';
import Row from '../Row/Row.component';
class Box extends React.Component{
    render(){
        return(
            <div style={{textAlign:'center'}}>
                <Row willData={this.props.data[0]}/>
                <Row willData={this.props.data[1]} />
                <Row willData={this.props.data[2]} />
            </div>
        );
    }
}
export default Box;
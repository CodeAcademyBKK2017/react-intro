import React from 'react';
import Row from '../Row/Row.component';
class Box extends React.Component{
    render(){
        return(
            <div style={{textAlign:'center'}}>
                <Row />
                <Row />
                <Row />
            </div>
        );
    }
}
export default Box;
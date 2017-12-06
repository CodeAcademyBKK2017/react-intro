import React from 'react';
import Row from '../Row/Row.component'

class Hello extends Component{

    cellclickHandler=(celData)=>{
        return()=>{
            console.log('cellclickHandler',celData);
        }
        
    }
    render(){

        const data = this.props.data;
        console.log(data);
        const rows = data.map((row,i)=>{
            return <Row class='row' data ={row.value} key = {row.key} cellclickHandler={this.cellclickHandler}/> 
        })
        return(
            <div>
                {rows}

            </div> 
        )
    }
}
export default Hello;

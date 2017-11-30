import React, { Component } from 'react';
import './App.css';

class Cell extends Component {

    render() {
        const title = this.props.title.toUpperCase();
        const btnType = title === 'O'? 'btn-o' : 'btn-x';

        return (
            <div className={`btn ${btnType}`}>{title}</div>
        )
    }
}

export default Cell;
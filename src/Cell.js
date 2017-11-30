import React, { Component } from 'react';
import './App.css';

class Cell extends Component {

    render() {
        const title = this.props.title.toUpperCase();
        const btnType = title === 'O'? 'btn-o' : 'btn-x';

        return (
            <button className={`btn ${btnType}`}>{title}</button>
        )
    }
}

export default Cell;
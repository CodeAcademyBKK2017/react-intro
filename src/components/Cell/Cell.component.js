import React, { Component } from 'react';

class Cell extends Component {

    render() {
        const {title, cellClickHandler} = this.props;

        let btnType = '';
        if(title.toUpperCase() === 'O') btnType = 'btn-o';
        if(title.toUpperCase() === 'X') btnType = 'btn-x';

        return (
            <div onClick={cellClickHandler} className={`btn ${btnType}`}>{title.toUpperCase()}</div>
        )
    }
}

export default Cell;
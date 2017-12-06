import React, {Component} from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Cell extends Component {
  constructor (props) {
    super(props);
    
  }

  render () {
    const {cellClickHandler,title} = this.props;

    let btnType = '';
    if (title.toUpperCase() === 'O') btnType = 'btn-o';
    if (title.toUpperCase() === 'X') btnType = 'btn-x';

    return (
      <div onClick={cellClickHandler(title)} className={`btn ${btnType}`}>{title.toUpperCase()}</div>
    );
  }
}

Cell.propTypes = {
  title: PropTypes.string,
  cellClickHandler: PropTypes.func.isRequired
};
Cell.defaultProps = {
  title: '',
  cellClickHandler: noop
};

export default Cell;

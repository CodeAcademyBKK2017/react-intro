import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Row from '../Row/Row.component';
import uuid from 'uuid';
class Box extends Component {
  state = {
    boxData: [
      {
        items: [
          {
            cell_state: '',
            cell_uid: uuid()
          },
          {
            cell_state: '',
            cell_uid: uuid()
          },
          {
            cell_state: '',
            cell_uid: uuid()
          }
        ],
        row_id: uuid()
      },
      {
        items: [
          {
            cell_state: '',
            cell_uid: uuid()
          },
          {
            cell_state: '',
            cell_uid: uuid()
          },
          {
            cell_state: '',
            cell_uid: uuid()
          }
        ],
        row_id: uuid()
      },
      {
        items: [
          {
            cell_state: '',
            cell_uid: uuid()
          },
          {
            cell_state: '',
            cell_uid: uuid()
          },
          {
            cell_state: '',
            cell_uid: uuid()
          }
        ],
        row_id: uuid()
      }
    ],
    cur_player: 1,
    last_x: 0,
    last_y: 0,
    player_win: 0,
    finished: false
  }

  update_state = (cell_uid) => {
    let snapshot_state = this.state;
    for (let i = 0; i < snapshot_state.boxData.length; i++) {
      for (let j = 0; j < snapshot_state.boxData[i].items.length; j++) {
        if (snapshot_state.boxData[i].items[j].cell_uid === cell_uid) {
          if (snapshot_state.boxData[i].items[j].cell_state === '') {
            if (!snapshot_state.finished) {
              if (snapshot_state.cur_player === 1) {
                snapshot_state.boxData[i].items[j].cell_state = 'X';
                snapshot_state.cur_player = 2;
              } else {
                snapshot_state.boxData[i].items[j].cell_state = 'O';
                snapshot_state.cur_player = 1;
              }
            }
          }
          snapshot_state.last_x = i;
          snapshot_state.last_y = j;
          break;
        }
      }
    }
    return snapshot_state;
  }

  is_finished = (snapshot_state, cur_x, cur_y, cur_state) => {
    let win = true;
    let previous_state = cur_state;
    for (let i = 0; i < snapshot_state.boxData[cur_x].length; i++) {
      if (snapshot_state.boxData[cur_x].items[i].cell_state !== previous_state) {
        this.win = false;
        break;
      } 
    }
    if (win) return true;

    win = false;
    for (let i = 0; i < snapshot_state.boxData[cur_x].items.length; i++) {
      if (snapshot_state.boxData[i].items[cur_y].cell_state !== previous_state) {
        this.win = false;
        break;
      } 
    }
    if (win) return true;

    // Waiting for Implement
    return false;
  }

  cellclickHandler = (cellValue) => () => { 
    
    // console.log(cellValue);
    
    this.setState(this.update_state(cellValue.cell_uid));
    return cellValue;
  } 

  createRow = (rowData) => <Row cellData={rowData.items}
    key={rowData.row_id} cellclickHandler={this.cellclickHandler} />

  render () {
    // console.log('render');
    const {boxData} = this.state;
    const rows = boxData.map(this.createRow);
    return (
      <div>{rows}</div>
    );
  }
  
  // constructor () {
  //   this.render = this.render.bind(this);
  // }

  componentWillMount = () => {
    // console.log('component Will Mount');
  }

  componentDidMount = () => {
    // console.log('component Did Mount');
    // this.setState({count: 2});
  }
}
Box.propTypes = {'boxData': PropTypes.array.isRequired};
Box.defaultProps = {'boxData': []};
export default Box;

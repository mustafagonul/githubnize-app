import React, { Component} from 'react';
import { PropTypes } from 'prop-types';

import BoardHeader from '../BoardHeader';
import ReadMe from '../../components/ReadMe';

import './style.css';


class Board extends Component {

  render() {
    return (
      <div className="board">
        <div className="header">
          <BoardHeader />
        </div>
        <div className="readme">
          <ReadMe />
        </div>
      </div>
    );
  }
}

Board.propTypes = {

}

export default Board;

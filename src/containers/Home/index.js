import React, { Component} from 'react';
import { PropTypes } from 'prop-types';

import Header from '../Header'
import Sidebar from '../Sidebar'
import Repos from '../Repos'
import Board from '../Board'

import './style.css';


class Home extends Component {

  render() {
    return (
      <div className="home">
        <Header />
        <div className="home-body">
          <div className="home-body-sidebar">
            <Sidebar />
          </div>
          <div className="home-body-repos">
            <Repos />
          </div>
          <div className="home-body-board">
            <Board />
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {

}

export default Home;

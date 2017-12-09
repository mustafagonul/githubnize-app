import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './style.css';


class Board extends Component {
  render() {
    const { children } = this.props;

    return (
      <MuiThemeProvider>
        <div>
          { children }
        </div>
      </MuiThemeProvider>
    );
  }
}


Board.propTypes = {
  children: PropTypes.node.isRequired,
};


export default connect(
  (state, props) => ({
    location: props.location,
  })
)(Board);
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import{ connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './style.css';


class Dashboard extends Component {
  render() {
    const { children } = this.props;

    return (

      <MuiThemeProvider>
        <div>
          Dashboard
        </div>
      </MuiThemeProvider>

      /*
      <MuiThemeProvider>
        <div>
          { children }
        </div>
      </MuiThemeProvider>

      */
    );
  }
}


Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};


export default connect(
  (state, props) => ({
    location: props.location,
  })
)(Dashboard);
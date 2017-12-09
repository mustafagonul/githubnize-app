import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import Home from '../Home';

import './style.css';


class Main extends Component {

  render() {
    let view = <Home />;
    if (!this.props.loginRequired)
      view = <Redirect to='/login' />;

    return (
      <div>
        { view }
      </div>
    );
  }

}

Main.propTypes = {
  loginRequired: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  return {
    loginRequired: state.authentication.get('valid')
  }
}

export default connect(mapStateToProps)(Main);

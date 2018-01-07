import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Login from '../Login'
import Home from '../Home';

import { githubAuthRequest } from '../../actions/auth';


class Main extends Component {
  handleGithubEvent(data) {
    if (!data.error) {
      this.props.dispatch(githubAuthRequest(data));
    }
  }

  render() {
    return (
      <div>
        {
          this.props.valid
          ? <Home />
          : <Login onGithubEvent={this.handleGithubEvent.bind(this)} />
        }
      </div>
    );
  }
}


Main.propTypes = {
  valid: PropTypes.bool.isRequired,
}


export default connect(
  state => ({
    valid: state.authentication.get('valid'),
  })
)(Main);

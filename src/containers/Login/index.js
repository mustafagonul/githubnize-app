import React, { Component} from 'react';
import { PropTypes} from 'prop-types';

import GithubButton from '../../components/GithubButton'

import './style.css';


class Login extends Component {
  render() {
    const { onGithubEvent} = this.props;

    return (
      <header className="login">
        <div className="logo-container">
          <h1 className="logo">Githubnize</h1>
        </div>
        <div className="buttons-container">
          <div className="button">
            <GithubButton onGithubEvent={onGithubEvent} />
          </div>
        </div>
      </header>

    );
  }
}


Login.propTypes = {
  onGithubEvent: PropTypes.func,
}


export default Login;

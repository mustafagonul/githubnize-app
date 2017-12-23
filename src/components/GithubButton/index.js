import React, { Component} from 'react';
import { PropTypes } from 'prop-types';

import Button from '../Button';
import githubIcon from '../../assets/github.svg';

import config from '../../configs/environment'

import styles from './style.css';

class GithubButton extends Component {
  constructor(props) {
    super(props);
    this.authWindow = null;
    this.handleAuthCallbackMessage = this.handleAuthCallbackMessage.bind(this);
    this.github_link = `https://github.com/login/oauth/authorize?client_id=${config.github.client_id}&scope=user`;
  }

  handleGithub() {
    this.authWindow = window.open(this.github_link, 'Github Authentication','width=450,height=550');

    window.addEventListener('message', this.handleAuthCallbackMessage, false);

    if (window.focus) {
      this.authWindow.focus();
    }
  }

  handleAuthCallbackMessage(event) {
    window.removeEventListener('message', this.handleAuthCallbackMessage);
    this.authWindow.close();
    this.authWindow = null;
    this.props.onGithubEvent && this.props.onGithubEvent(event.data);
  }

  render() {
    return (
      <Button
        className='brand-blue-bg'
        onClick={this.handleGithub.bind(this)}
        rounded={true}
        icon={githubIcon}
        iconClass={styles.iconStyle}>
        Login with Github
      </Button>
    );
  }
}

GithubButton.propTypes = {
  onTwitterEvent: PropTypes.func,
}

export default GithubButton;

import React, { Component} from 'react';
import { PropTypes } from 'prop-types';

import './style.css';


class Login extends Component {

  render() {
    return (
      <header className="login">
        <div className="logo-container">
          <h1 className="logo">Githubnize Login</h1>
        </div>
      </header>
    );
  }
}

Login.propTypes = {
  
}

export default Login;

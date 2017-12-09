import React, { Component, PropTypes } from 'react';

import './style.css';


class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="logo-container">
          <h1 className="logo">Githubnize Header</h1>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  
}

export default Header;

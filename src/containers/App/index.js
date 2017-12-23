import React, { Component } from 'react';


import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Main from '../Main'

import './style.css';

export default class App extends Component {
  render() {

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <Main />
        </div>
      </MuiThemeProvider>
    );

  }
}

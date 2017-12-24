import React, { Component } from 'react';


import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {green100, green500, green700} from 'material-ui/styles/colors';

import Main from '../Main'

// import './style.css';

/*
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
}, {
  avatar: {
    borderColor: null,
  }
});
*/


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

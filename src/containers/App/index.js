import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import Main from '../Main'


const muiTheme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  overrides: {
    MuiChip: {
      root: {
        'background-color': 'grey',
      }
    }
  }
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme ={muiTheme}>
        <Main />
      </MuiThemeProvider>
    );
  }
}


export default App;
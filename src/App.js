import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import 'typeface-roboto';
import Routes from './components/Routes'
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#99999c',
      main: '#000000',
      dark: '#00396f',
    }
  },
  typography: {
    fontFamily:
    'Roboto,sans-serif',
  }
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes/>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
import * as React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme'
import 'animate.css/animate.min.css';

function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    return (
      <React.Suspense fallback="">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...props} />
        </MuiThemeProvider>
      </React.Suspense>
    );
  }

  return WithRoot;
}

export default withRoot;

  
import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: pink[500],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#efefef',
    },
  },
});

export default theme;
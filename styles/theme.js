import {createMuiTheme} from '@material-ui/core/styles'
// Create a theme instance.
export const darkTheme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#0070f3'
    },
    secondary: {
      main: '#FF5733'
    }
  }
})

export const lightTheme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  palette: {
    type: 'light',
    primary: {
      main: '#0070f3'
    },
    secondary: {
      main: '#FF5733'
    },
    text: {
      primary: '#22292f',
      secondary: '#808080'
    }
  }
})

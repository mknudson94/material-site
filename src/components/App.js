import React, {Component} from 'react';
import Banner from './Banner';
import ResumeTabs from './ResumeTabs';
import NavDrawer from './NavDrawer'
import NavBar from './NavBar';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 660,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  }
});

const styles = theme => ({
  root: {
    display: 'flex'
  },
  
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 10,
    [theme.breakpoints.down('xs')]: {
      padding: 'initial',
      paddingTop: 55,
    },
  },
});

class App extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };


  render() {
    const { classes } = this.props;
    return(
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar 
          handleDrawerToggle={this.handleDrawerToggle}
        />
        <NavDrawer
          className={classes.drawer}
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
        />
        <main className={classes.content}>
          <Banner style={{margin: '0 20px'}}/>
          <ResumeTabs />
        </main>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
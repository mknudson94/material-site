import React, {Component} from 'react';
import Banner from './Banner';
import ResumeTabs from './ResumeTabs';
import NavDrawer from './NavDrawer'
import NavBar from './NavBar';

import resume from '../images/resume.pdf';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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

  footer: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 240,        
    },
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 0',
    alignItems: 'center',
    height: 160,
    justifyContent: 'space-around',
    background: 'linear-gradient(0deg, rgba(70,70,70,1) 0%, rgba(20,20,20,1) 30%, rgba(20,20,20,1) 70%, rgba(70,70,70,1) 100%)',
    color: 'white',
  }
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
      <div className={classes.footer}>
        <Typography variant="h6" style={{color:'#eee'}}>
          Need a printable version?
        </Typography>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <Button variant='outlined' style={{color:'#eee', borderColor: '#eee'}}>
            Download resume
          </Button>
        </a>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
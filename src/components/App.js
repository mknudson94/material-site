import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import Banner from './Banner';
import ResumeTabs from './ResumeTabs';
import NavDrawer from './NavDrawer'
import NavBar from './NavBar'

const styles = theme => ({
  root: {
    display: 'flex'
  },
  
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 10
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
    );
  }
}

export default withStyles(styles)(App);
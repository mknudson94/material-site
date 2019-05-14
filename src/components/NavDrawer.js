import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

import EmailIcon from '@material-ui/icons/Email';

import LinkedinBox from 'mdi-material-ui/LinkedinBox';
import GithubCircle from 'mdi-material-ui/GithubCircle';
import rook from '../images/rookjump.png';
import me from '../images/formal_xs.jpg';
import EmailDialog from './EmailDialog';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  contentContainer: {
    paddingTop: theme.spacing.unit * 8,
  },
  contactTitleBlock: {
    backgroundImage: `linear-gradient(to top, white 35px, ${theme.palette.secondary.light} 35px, ${theme.palette.secondary.light})`,
  },
  projectTitleBlock: {
    background: theme.palette.secondary.light, 
    marginTop: 4,
  },
  title: {
    color: 'white', 
    textAlign: 'center',
  },
  drawerImg: {
    display: 'block', 
    margin: 'auto', 
    height: 70, 
    borderRadius: '50%', 
    border: '3px solid white',
  },
  emailMe: {
    '&$hover': {
      background: 'black',
    }
  },
  hover: {},
});

class NavDrawer extends Component {
  state = {
    emailOpen: false,
  };

  handleEmailOpen = () => {
    this.setState({ emailOpen: true });
  };

  handleEmailClose = () => {
    this.setState({ emailOpen: false });
  };

  render() {
    
    const { classes } = this.props;

    const drawerContent = (
      <div className={classes.contentContainer}>
      <List>
        <div className={classes.contactTitleBlock}>
          <Typography variant='overline' className={classes.title}>Contact me</Typography>
          <img src={me} alt='' className={classes.drawerImg}></img>
        </div>
        <ListItem component='a' href='https://www.linkedin.com/in/michaelellsworthknudson/'>
          <ListItemIcon><LinkedinBox/></ListItemIcon><ListItemText>LinkedIn</ListItemText>
        </ListItem>
        <ListItem component='a' href='https://github.com/mknudson94'>
          <ListItemIcon><GithubCircle/></ListItemIcon><ListItemText>Github</ListItemText>
        </ListItem>
        <ListItem component='a' href='#' variant='text' onClick={this.handleEmailOpen} className={classes.emailMe}>
          <ListItemIcon><EmailIcon/></ListItemIcon><ListItemText>Email me</ListItemText>
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem className={classes.projectTitleBlock}>
          <ListItemText><Typography variant='overline' className={classes.title}>Projects</Typography></ListItemText>
        </ListItem>
        <ListItem component='a' href='https://mknudson94.github.io/rook-jump/'>
           <ListItemAvatar><Avatar src={rook}/></ListItemAvatar><ListItemText>Rook Jumping Maze</ListItemText>
        </ListItem>
      </List>
      </div>
    );

    return(
      <>
      <EmailDialog
        open={this.state.emailOpen}
        onClose={this.handleEmailClose}
      />
      <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp>
            <Drawer
              container={this.props.container}
              variant="temporary"
              open={this.props.mobileOpen}
              onClose={this.props.handleDrawerToggle}
            >
              {drawerContent}
            </Drawer>
          </Hidden>
          <Hidden xsDown>
            <Drawer
              variant="permanent"
              open
            >
              {drawerContent}
            </Drawer>
          </Hidden>
        </nav>
        </>
    );
  }
}

export default withStyles(styles)(NavDrawer);
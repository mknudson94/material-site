import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { withStyles } from '@material-ui/core/styles';

import nodeAvatar from '../images/node-logo.jpg';
import reactAvatar from '../images/react-logo.jpg';
import materialAvatar from '../images/material-logo.svg';


const languages = [
  {
    name: 'JavaScript',
    strength: 0.95,
    chips: [{label: 'Node.js', avatar: nodeAvatar}, {label: 'Express.js'}, {label: 'React.js', avatar: reactAvatar}, {label: 'Material-UI', avatar: materialAvatar}],
  },
  {
    name: 'HTML/CSS',
    strength: 0.8,
  },
  {
    name: 'Python',
    strength: 0.925,
  },
  {
    name: 'Java',
    strength: 0.85,
  },
  {
    name: 'C/C++',
    strength: 0.7
  },
];
const tools = [
  {
    name: 'Version Control',
    chips: [{label: 'Git'}, {label: 'Github'}, {label: 'SVN'}],
  },
  {
    name: 'Database Management',
    chips: [{label: 'MongoDB'}, {label: 'PostgreSQL'}],
  },
];
const softSkills = [
  {
    name: 'Communication',
    chips: [{label: 'Design proposals'}, {label: 'Technical reports'}, {label: 'Instruction manuals'}, {label: 'Presentations'}]
  },
  {
    name: 'Languages',
    chips: [{label: 'English'}, {label: 'Spanish'}]
  }
];

const styles = theme => ({
  cardList: {
    padding: '20px'
  },
  resumeCard: {
    marginBottom: '20px'
  },
  progressBarCell: {
    width: '100%',
  },
  languageChip: {
    height: 28, 
    fontSize: '.8rem', 
    margin: '0 10px',
  },
  resumeChip: {
    margin: '0 14px',
  },
  toolDiv: {
    marginBottom: '20px',
  },
});

class SkillsTab extends Component {
  state = {
    loading: 0
  };

  componentDidMount() {
    this.setState({loading: 1});
  }

  render() {
    const { classes } = this.props;
    return(
      <Paper>
        <div className={classes.cardList}>
        <Card className={classes.resumeCard}>
          <CardContent>
            <Typography variant='h4'>Languages</Typography>
            <Table>
              <TableBody>
                {languages.map(language => (
                  <>
                  <TableRow>
                    <TableCell>
                      <Typography variant='subtitle2'>{language.name}</Typography>
                    </TableCell>
                    <TableCell className={classes.progressBarCell} >
                      <LinearProgress variant='determinate' value={this.state.loading * language.strength * 100}/>
                    </TableCell>
                  </TableRow>
                  {language.hasOwnProperty('chips') ? 
                  <TableRow>
                    <TableCell colSpan={2}>
                      {language.chips.map(chip => 
                        <Chip label={chip.label} 
                              avatar={chip.hasOwnProperty('avatar') ? <Avatar src={chip.avatar}></Avatar> : <Avatar>{chip.label.slice(0,1)}</Avatar>} 
                              className={classes.languageChip}
                        />)}
                    </TableCell>
                  </TableRow>
                    :
                    null
                  }
                  </>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className={classes.resumeCard}>
          <CardContent>
            <Typography gutterBottom variant='h4'>Tools</Typography>
            {tools.map(tool => (
              <div className={classes.toolDiv}>
                <Typography  variant='subtitle2'>{tool.name}</Typography>
                <div>
                  {tool.chips.map(chip => (
                    <Chip 
                      label={chip.label}
                      avatar={chip.hasOwnProperty('avatar') ? <Avatar src={chip.avatar}></Avatar> : <Avatar>{chip.label.slice(0,1)}</Avatar>}
                      className={classes.languageChip}
                      icon={chip.hasOwnProperty('icon') ? chip.icon : null}
                    />
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className={classes.resumeCard}>
          <CardContent>
            <Typography gutterBottom variant='h4'>Soft Skills</Typography>
            {softSkills.map(softSkill => (
              <div style={{marginBottom: 16}}>
              <Typography  variant='subtitle2'>{softSkill.name}</Typography>
              <div>
                {softSkill.chips.map(chip => (
                  <Chip 
                    label={chip.label}
                    avatar={chip.hasOwnProperty('avatar') ? <Avatar src={chip.avatar}></Avatar> : <Avatar>{chip.label.slice(0,1)}</Avatar>}
                    className={classes.resumeChip}
                  />
                ))}
              </div>
              </div>
            ))}
          </CardContent>
        </Card>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(SkillsTab);
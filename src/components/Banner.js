import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import headshot from '../images/head-shot_small.jpg';

const styles = (theme) => ({
  container: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: 20,
    },
  },
  headshot: {
    objectFit: 'contain',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: '30px',
  }
});

class Banner extends Component {
  render() {

    const { classes } = this.props;

    return (
      <Paper className={classes.container}>
        <img src={headshot} alt='Michael Knudson headshot' className={classes.headshot}/>
        <div className={classes.text}>
          <Typography variant='h2' gutterBottom>
            Michael Knudson
          </Typography>
          <Typography variant='body2'>
            Computer engineer with strong foundation in computer science and experience developing production-quality code in agile team settings. Strengths include core competencies in CS fundamentals and a passion for learning and continuously honing my craft. Additional experience with full-stack web development and basic scripting, as well as three years of full-time volunteer experience. Seeking full-time employment in software development in fall of 2020.
          </Typography>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Banner);
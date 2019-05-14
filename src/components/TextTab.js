import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

import PlaceIcon from '@material-ui/icons/Place';

import resumeData from './resume-text';

const styles = theme => ({
  cardList: {
    padding: '20px'
  },
  resumeCard: {
    marginBottom: '20px'
  },
  cardContent: {
    display: 'flex', 
    flexDirection: 'column',
  },
  titleBlock: {
    display: 'inline-block', 
    float: 'left',
  },
  dateBlock: {
    display: 'inline-block', 
    float: 'right',
  },
  cardBullet: {
    padding: '0.5em', 
    lineHeight: 1.2,
  },
});

class TextTab extends Component {
  render() {
    return(
      <Paper square>
        <div className={this.props.classes.cardList}>
          {resumeData[this.props.tab].experiences.map(experience => (
            <ResumeCard data={experience} classes={this.props.classes}/>
          ))}
        </div>
      </Paper>
    );
  }
}

function ResumeCard(props) {
    const { data, classes } = props;
    return(
    <Card className={classes.resumeCard}>
      <CardContent className={classes.cardContent}>
        <div>
          <div className={classes.titleBlock}>
            <Typography variant='h5' inline>
              {data.title}&nbsp;
            </Typography>
            <Typography variant='subtitle2' inline>
              <PlaceIcon/>{data.location}
            </Typography>
          </div>
          <Typography variant='overline' component='div' className={classes.dateBlock}>
            {data.dates}
          </Typography>
        </div>
        <Typography variant='h6' component='div'>
          {data.subtitle}
        </Typography>
        {data.items.map(item => (
          <>
            <Typography variant='body1' className={classes.cardBullet}>{item}</Typography>
            <Divider/>
          </>
        ))}
      </CardContent>
    </Card>
    );
  }

  export default withStyles(styles)(TextTab);
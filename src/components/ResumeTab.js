import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import PlaceIcon from '@material-ui/icons/Place';

import nodeAvatar from '../images/node-logo.jpg';
import reactAvatar from '../images/react-logo.jpg';
import materialAvatar from '../images/material-logo.svg';

const hardcode = {
  'Work Experience': {
    experiences: [
      {
        title: 'Turner Broadcasting Inc.',
        subtitle: 'Dev-Ops Intern',
        location: 'Atlanta, GA',
        dates: 'Jan to Apr 2019',
        items: [
          'Added new pages and functionality to internal web app for managing workplace display boards',
          'Supported web app for managing Turner media resources ',
          'Initialized and configured several workplace display boards'
        ]
      },
      {
        title: 'L3 Technologies',
        subtitle: 'Software Engineering Intern',
        location: 'Alpharetta, GA',
        dates: 'May to Aug 2018',
        items: [
          'Automated hardware test data collection with Python script, saved ~1 person-hour per test (run multiple times daily)',
          'Updated operational test procedure mode on Airbus, Boeing, and Epic aircraft display units to improve debugging process',
          'Worked with team of interns to create proposal for hand dryers at L3 campus, making campus more ecofriendly'
        ]
      },
      {
        title: 'Scribble, Inc.',
        subtitle: 'Software Engineering Intern',
        location: 'New York, NY',
        dates: 'Aug to Dec 2017',
        items: [
          'Converted user authentication codebase from Swift to Python',
          'Built metrics dashboard for app-usage analytics',
          'Improved product website usability by building error pages and navigation bar'
        ]
      }
    ]
  },
  'Education': {
    experiences: [
      {
        title: 'Georgia Institute of Technology',
        subtitle: 'B.S. Computer Engineering ',
        location: 'Atlanta, GA',
        dates: 'Jan 2018 to Aug 2020',
        items: []
      },
      {
        title: 'Brigham Young University-Idaho',
        subtitle: 'B.S. Computer Engineering',
        location: 'Rexburg',
        dates: 'Jan 2017 to July 2018',
        items: ['Transferred with 49 credits | GPA 3.7']
      },
    ]
  },
  'Volunteer Experience': {
    experiences: [
      {
        title: 'Habitat for Humanity NYC',
        subtitle: 'Crew Leader',
        location: 'New York, NY',
        dates: "Jan to Dec 2016",
        items: [
          'Led crews of 5-20 volunteers daily in the completion of Habitat-NYC projects',
          'Restored 2 disaster-damaged houses, constructed 16-unit condo building',
          'Promoted team building and provided guidance to volunteers',
        ]
      },
      {
        title: 'Church of Jesus Christ of Latter-day Saints',
        subtitle: 'Full-time Missionary',
        location: 'Ogden, UT',
        dates: "May 2013 to May 2015",
        items: [
          'Identified potential listeners, delivered three to four presentations each day in Spanish and in English',
          'Coordinated with up to 8 local congregations simultaneously',
          'Managed teams of 8 to 26 full-time missionaries',
          'Personally trained 2 full-time missionaries'
        ]
      },
    ]
  }
}

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

class SkillSheet extends Component {
  state = {
    loading: 0
  };

  componentDidMount() {
    this.setState({loading: 1});
  }

  render() {
    return(
      <>
        <Card id='languages'>
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
                    <TableCell style={{width: '100%'}}>
                      <LinearProgress variant='determinate' value={this.state.loading * language.strength * 100}/>
                    </TableCell>
                  </TableRow>
                  {language.hasOwnProperty('chips') ? 
                  <TableRow>
                    <TableCell colSpan={2}>
                      {language.chips.map(chip => 
                        <Chip label={chip.label} 
                              avatar={chip.hasOwnProperty('avatar') ? <Avatar src={chip.avatar}></Avatar> : <Avatar>{chip.label.slice(0,1)}</Avatar>} 
                              style={{height: 28, fontSize: '.8rem', margin: '0 10px'}}
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
        <Card id='tools'>
          <CardContent>
            <Typography gutterBottom variant='h4'>Tools</Typography>
            {tools.map(tool => (
              <div style={{marginBottom: 16}}>
              <Typography  variant='subtitle2'>{tool.name}</Typography>
              <div>
                {tool.chips.map(chip => (
                  <Chip 
                    label={chip.label}
                    avatar={chip.hasOwnProperty('avatar') ? <Avatar src={chip.avatar}></Avatar> : <Avatar>{chip.label.slice(0,1)}</Avatar>}
                    style={{margin: '0 14px'}}
                  />
                ))}
              </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card id='softSkills'>
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
                    style={{margin: '0 14px'}}
                  />
                ))}
              </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </>
    );
  }
}

function ResumeCard(props) {
  const { data } = props;
  return(
  <Card>
    <CardContent style={{display: 'flex', flexDirection: 'column'}}>
      <div>
        <div style={{display: 'inline-block', float: 'left'}}>
          <Typography variant='h5' inline>
            {data.title}&nbsp;
          </Typography>
          <Typography variant='subtitle2' inline>
            <PlaceIcon/>{data.location}
          </Typography>
        </div>
        <Typography variant='overline' component='div' style={{display: 'inline-block', float: 'right'}}>
          {data.dates}
        </Typography>
      </div>
      <Typography variant='h6' component='div'>
        {data.subtitle}
      </Typography>
      {data.items.map(item => (
        <>
          <Typography variant='body1' style={{padding: '0.5em', lineHeight: 1.2}}>{item}</Typography>
          <Divider/>
        </>
      ))}
    </CardContent>
  </Card>
  );
}

class ResumeTab extends Component {
  render() {
    return(
      <Paper>
        {this.props.tab === "Skills" ? 
         <SkillSheet/>             
        :
          <div className='cardList'>
            {hardcode[this.props.tab].experiences.map(experience => (
              <ResumeCard data={experience}/>
            ))}
          </div>
        }
      </Paper>
    );
  }
}

export default ResumeTab;
import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TextTab from './TextTab';
import SkillsTab from './SkillsTab';

const tabs = [
  'Work Experience',
  'Education',
  'Skills',
  'Volunteer Experience'
];

class ResumeTabs extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return(
      <div>
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          variant='fullWidth'
        >
          {tabs.map(label => <Tab label={label} />)}
        </Tabs>
      </Paper>
      {tabs[value] === 'Skills' ? 
        <SkillsTab />
        :
        <TextTab tab={tabs[value]}/>
      }
      </div>
    );
  }

}

export default ResumeTabs;

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import SendIcon from '@material-ui/icons/Send';

import * as emailjs from 'emailjs-com';
import ids from '../config';

export default class EmailDialog extends React.Component {

  initialState = {
    name: '',
    email: '',
    body: '',
  };

  state = Object.assign(this.initialState);

  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  };

  submitEmail = () => {
    const templateParams = {
      "user_name": this.state.name,
      "user_email": this.state.email,
      "body": this.state.body,
    };
    emailjs.send(ids.serviceID, ids.templateID, templateParams, ids.userID)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        }
      );
    this.props.onClose();
    this.setState(this.initialState);
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.onClose}
          onBackdropClick={this.props.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Send a message</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              id="name"
              required
              label="Name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange('name')}
            />
            <TextField
              fullWidth
              id="email"
              label="Email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
            <TextField
              fullWidth
              multiline rows={3}
              variant='outlined'
              id="body"
              required
              label="Message"
              placeholder="You're hired!"
              type="text"
              value={this.state.body}
              onChange={this.handleChange('body')}
              style={{marginTop: '8px'}}
            />
          </DialogContent>
          <DialogActions>
            <Button color='primary' onClick={this.props.onClose}>
              Cancel
            </Button>
            <Button color='primary' onClick={this.submitEmail}>
              <SendIcon />&nbsp;&nbsp;Send
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
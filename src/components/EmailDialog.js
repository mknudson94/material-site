import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';

import SendIcon from '@material-ui/icons/Send';

import * as emailjs from 'emailjs-com';
import ids from '../config';

export default class EmailDialog extends React.Component {

  initialState = {
    name: '',
    email: '',
    body: '',
    snackbarOpen: false,
    errorSnackbarOpen: false,
    nameErr: false,
    bodyErr: false,
  };

  constructor(props) {
    super(props);
    this.state = Object.assign(this.initialState);
  }
  
  handleChange = name => e => {
    this.setState({ 
      [name]: e.target.value,
      nameErr: false,
      bodyErr: false,
     });
  };

  handleClose = () => {
    this.setState(this.initialState);
    this.props.onClose();
  }

  handleSnackbarClose = () => {
    this.setState({ snackbarOpen: false, errorSnackbarOpen: false });
  };

  fieldIsEmpty = string => !string || string.length === 0;

  submitEmail = () => {
    let err = false;
    if (this.fieldIsEmpty(this.state.name)) {
      this.setState({nameErr: true});
      err = true;
    }
    if (this.fieldIsEmpty(this.state.body)) {
      this.setState({bodyErr: true});
      err = true;
    }
    if (err) return;
    const templateParams = {
      "user_name": this.state.name,
      "user_email": this.state.email,
      "body": this.state.body,
    };
    emailjs.send(ids.serviceID, ids.templateID, templateParams, ids.userID)
      .then( response => {
        console.log('SUCCESS!', response.status, response.text);
        this.setState({snackbarOpen: true});
        }, error => {
          this.setState({errorSnackbarOpen: true});
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
              error={this.state.nameErr}
              helperText={this.state.nameErr ? "Can't leave name blank" : null}
              label="Name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange('name')}
            />
            <TextField
              fullWidth
              id="email"
              label="Email (optional)"
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
              error={this.state.bodyErr}
              helperText={this.state.bodyErr ? "Can't leave body blank" : null}
              label="Message"
              placeholder="I like your work!"
              type="text"
              value={this.state.body}
              onChange={this.handleChange('body')}
              style={{marginTop: '8px'}}
            />
          </DialogContent>
          <DialogActions>
            <Button color='primary' onClick={this.handleClose}>
              Cancel
            </Button>
            <Button color='primary' onClick={this.submitEmail}>
              <SendIcon />&nbsp;&nbsp;Send
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={5000}
          onClose={this.handleSnackbarClose}
          ContentProps={{
            'aria-describedby': 'success message',
          }}
          message={<span id="message-id">Message sent!</span>}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.errorSnackbarOpen}
          autoHideDuration={5000}
          onClose={this.handleSnackbarClose}
          ContentProps={{
            'aria-describedby': 'success message',
          }}
          message={<span id="message-id">Hmm... something went wrong. Please try again later.</span>}
        />
      </div>
    );
  }
}
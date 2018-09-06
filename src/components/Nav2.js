import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Button, Typography, Slide } from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import {withRouter} from 'react-router-dom';


const styles = theme => ({
  root: {
    width: '100%'
  },
  typography: {
    flex: 1,
    color: "white",
    ":hover": {
      textDecoration: "none",
      color: "red",
    }
  },
   appBar: {
    background: 'transparent', 
    boxShadow: 'none',
    position: 'relative',
  },
  flex: {
    flex: 24,
  },
    title: {
    position: 'relative',
    marginRight: 60,
  },
    closer: {
    marginRight: -30,
  },
  Avatar: {
    marginLeft: -5,
    marginRight: 20,
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Nav2 extends Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({open: true});
  };

  handleDrawerClose = () => {
    this.setState({open: false});
  };

  render() {
    const {classes} = this.props;
    return (
     <AppBar position="relative">
      <Toolbar>
       
              <IconButton href="/projects" color="inherit" onClick={this.handleClose}  TransitionComponent={Transition} aria-label="Close">
                <KeyboardArrowLeft />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Back
              </Typography>
         
              <Button href="/projects" color="inherit" onClick={this.handleClose}>
                Close
              </Button>
                <IconButton  href="/projects" color="inherit" onClick={this.handleClose}  TransitionComponent={Transition} aria-label="Close">
                <CloseIcon />
              </IconButton>

            </Toolbar>
   </AppBar>
    );
  }
}


Nav2.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, {withTheme: true})(Nav2));
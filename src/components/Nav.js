import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Avatar, Hidden, IconButton, Button, Typography, Drawer, List, ListItem, Divider } from '@material-ui/core/';
import {withRouter} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

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
  Avatar: {
    marginLeft: -5,
    marginRight: 20,
  }
});

class Nav extends Component {
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
      <div className={classes.root}>
        <Hidden mdUp>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
              >
                <MenuIcon/>
              </IconButton>

              <Typography type="title" color="inherit" 
                className={classes.typography}>
                marcobrien.co
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer open={this.state.open} onClose={() => this.handleDrawerClose()}>
            <div
              tabIndex={0}
              role="button"
              onClick={() => this.handleDrawerClose()}
              onKeyDown={() => this.handleDrawerClose()}
            >
              <List>
                <ListItem>
                  <Button color="inherit" href='/About'>About</Button>
                </ListItem>
                <Divider/>
                <ListItem>
                  <Button href='/projects' color="inherit">Projects</Button>
                </ListItem>
                     <Divider/>
                <ListItem>
                  <Button href='/contact' color="inherit">Contact</Button>
                </ListItem>
                <Divider/>
                <ListItem>
                  <Button href="https://github.com/marc-obrien" color="inherit">Github</Button>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <AppBar position="static">
            <Toolbar>
               <a href="/"><Avatar src="avatar.gif" className={classes.Avatar}/></a>
              <Typography type="title" color="inherit"
href="/about"
                          className={classes.typography}>
                marcobrien.co
            </Typography>
              <Button href="/About" color="inherit">About</Button>
              <Button href="/projects" color="inherit">Projects</Button>
              <Button color="inherit" href="/contact">Contact</Button>
              <Button href="https://github.com/marc-obrien" color="inherit">Github</Button>
            </Toolbar>
          </AppBar>
        </Hidden>
      </div>
    );
  }
}


Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, {withTheme: true})(Nav));
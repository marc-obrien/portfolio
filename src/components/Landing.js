import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Divider, Typography, Avatar } from '@material-ui/core/';
import {withRouter} from 'react-router-dom';
import RecentWork from './RecentWork';
import Skills from './Skills';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: '100px'
  },
  img: {
    maxWidth: '200px',
    width: '100%',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: '5px',
    borderColor: theme.palette.primary.main
  },
   row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 330,
    height: 315,
  },
});


class Landing extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>

        <Grid container spacing={24} direction="column" justify="center" alignItems="center">
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
             <Slide top>
            <Typography variant="display2" align="center" color="textPrimary" gutterBottom>
              Marc O'Brien, Software Engineering Director
            </Typography>
            </Slide>
          </div></div>
          <Fade>
            <Grid item>
              <div className={classes.row}>
             
      <Avatar src="bigav.jpg" className={classNames(classes.avatar, classes.bigAvatar)}
      /></div>
            </Grid>
          </Fade>
          <Grid item>
            <Slide left>
              <Typography align="center" type="display1" gutterBottom>
                Hey, I am a software engineering director in San Francisco.
              </Typography>
            </Slide>
            <Slide left>
              <Typography align="center" type="subheading" gutterBottom>
                I mentor, lead, build, innovate, and manage full-stack software teams.
              </Typography>
              <Typography align="center" type="subheading" paragraph gutterBottom>I primarily work with React.js,
                Redux, Node.js,
                Express, AWS, Docker
                MongoDB and many others but picking up
                new frameworks and languages is not a problem.
              </Typography>
            </Slide>
            <Divider light/>
          </Grid>
          <Grid item>
            <Slide left>
              <Typography variant="title" color="textPrimary" gutterBottom>
                Skills
              </Typography>
            </Slide>
          </Grid>
          <Grid item>
            <Slide up>
              <Skills/>
            </Slide>
            <br/>
            <br/>
            <Divider light/>
            <br/>
            <br/>
          </Grid>
          <Grid item>
            <Slide left>
              <Typography variant="title" color="textPrimary"  gutterBottom>
                Recent Work
              </Typography>
            </Slide>
          </Grid>
          <Grid item>
            <Slide left>
              <RecentWork/>
            </Slide>
            <br/>
            <Divider light/>
            <br/>
           
          </Grid>
        </Grid>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, {withTheme: true})(Landing));
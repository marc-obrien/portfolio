import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper, Divider, Grid, Button, } from '@material-ui/core/';
import MySkills from './MySkills';
import Job1 from './resume/job1';
import Job2 from './resume/job2';
import Job3 from './resume/job3';
import GetAppIcon from '@material-ui/icons/GetApp';


const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  button: {
    marginTop: -80,
    marginLeft: 360,
  },
  mainFeaturedPost: {
    backgroundImage: `url("astro.jpg")`,
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
    resume: {
    marginLeft: 3,
  },
     date: {
    marginLeft: 350,
     marginTop: -34,
  },
    dlist: {
    marginTop: -20,
     padding: 5,
  },
      dlist2: {
    padding: 5,
    marginLeft: 2,
  },
    star: {
    marginRight: 20,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

function About(props) {
  const { classes } = props;

  return (
    <React.Fragment>
  
      <div className={classes.layout}>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography variant="display2" color="inherit" gutterBottom>
                    Hello, I'm Marc O'Brien 
                  </Typography>
                  <Typography variant="headline" color="inherit" paragraph>
                    a software Engineering DIrector based out of San Francisco.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={40} className={classes.cardGrid}>
    
</Grid>

          <Grid container spacing={40} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={11} md={6}>
          <Typography variant="title" gutterBottom>
                My Skills
              </Typography>
              <Divider />
            <MySkills />
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={6}>
             <Typography className={classes.resume} variant="title" gutterBottom>
                My Resume</Typography>

             <Button href="resume.pdf" target="_blank" variant="contained" color="default" className={classes.button}>
        Download   
        <GetAppIcon className={classes.rightIcon} />
      </Button>
             <Job1 />
             <Job2 />
              <Job3 />
            </Grid>

            {/* End sidebar */}
          </Grid>
        </main>
      </div>

    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
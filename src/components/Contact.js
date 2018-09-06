import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Grid, Typography, Icon } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import Slide from 'react-reveal/Slide';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
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
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
});


function Contact(props) {
  const { classes } = props;

  return (
    <React.Fragment>

      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
           <Slide top>
            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              Get in touch
            </Typography>
            </Slide>
            <Typography variant="title" align="center" color="textSecondary" paragraph>
              Do you have an upcoming project you'd like help with? Let's connect and find out your needs.
            </Typography>


            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button href="mailto:marcobrien11@gmail.com" variant="contained" color="primary">
                  <Icon className={classNames(classes.icon, "fa fa-envelope")} />
                    Email 
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="https://join.slack.com/t/marcobrienco/shared_invite/enQtNDI3MjIwMzY4OTY0LTBlMWFiZWRkNGQ2M2ZhMzViYzIxNWYxMmEzM2RjZWEzY2ViYjYxYmZmNWJkOWFkN2Q4ODhmYmI4NjdhOTgwMWM" target="_blank" variant="outlined" color="primary">
                  <Icon className={classNames(classes.icon, "fab fa-slack")} />
                    Slack
                  </Button>

                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
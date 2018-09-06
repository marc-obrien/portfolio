import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core/';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaSlack } from 'react-icons/fa';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  footer: {
    marginLeft: '12px',
    marginRight: '12px',
    marginTop:   '12px',
    paddingTop:  '12px',
  },
  Typography: {
    color: '#ffffff',
    textDecoration: 'none',
  },
    Typography2: {
    color: '#ffffff',
    textDecoration: 'none',
    marginLeft: 150,
    marginTop: -75,
    padding: 30,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

class Footer extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <footer className={classes.footer}>
          <Grid container direction="row">
            <Grid item xs={4}>
              <Grid container direction="column">
                <Grid item>
                  <Typography type='display1' className={classes.Typography}>
                    Marc O'Brien
                  </Typography>

                </Grid>
                <Grid item>
                  <Typography paragraph className={classes.Typography}>
                    I am a software engineering leader. I can build your next product and grow your team.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography paragraph className={classes.Typography}>
                    This website was made with React.js + Material-UI components.
                  </Typography>
                  <a href="https://github.com/marcobrien/react-portfolio">Source Code</a>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}/>
            <Grid item xs={4}>
              <Grid container direction="column">
                <Grid item>
                  <Typography type="headline" className={classes.Typography}>
                    Social Links
                  </Typography>
                </Grid>
                <Grid item>
                
        <div className="footer-social-networks">
        <Button variant="fab" color="primary" aria-label="Add" className={classes.button} href="https://twitter.com/marcobrien2" target="_blank">
        <FaTwitter />
      </Button>
    <Button variant="fab" color="primary" aria-label="Add" className={classes.button} href="https://instagram.com/marcobrien_dev" target="_blank">
        <FaInstagram />
      </Button>
          <Button variant="fab" color="primary" aria-label="Add" className={classes.button} href="https://www.linkedin.com/in/marc-obrien" target="_blank">
        <FaLinkedin />
      </Button>
          <Button variant="fab" color="primary" aria-label="Add" className={classes.button} href="https://www.github.com/marc-obrien/" target="_blank">
        <FaGithub />
      </Button>
    <Button variant="fab" color="primary" aria-label="Add" className={classes.button} href="  https://join.slack.com/t/marcobrienco/shared_invite/enQtNDI3MjIwMzY4OTY0LTBlMWFiZWRkNGQ2M2ZhMzViYzIxNWYxMmEzM2RjZWEzY2ViYjYxYmZmNWJkOWFkN2Q4ODhmYmI4NjdhOTgwMWM " target="_blank">
        <FaSlack />
      </Button>       
                  </div>
                </Grid>
                <Grid item>
                  <Typography type="headline" className={classes.Typography}>
                    Contact
                  </Typography>
                </Grid>
                <Grid item>
                       <Button variant="fab" color="primary" aria-label="Add" className={classes.button} href="mailto:marc@marcobrien.co" target="_blank">
        <FaEnvelope />
      </Button>
             <Button variant="fab" color="primary" aria-label="Add" className={classes.button} href="" target="_blank"> 
        <FaPhone />
      </Button><Typography type="headline" className={classes.Typography2}>
      415-246-0991</Typography>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(Footer);
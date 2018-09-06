import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, Typography, Grid, Button, CardContent, CardActions, CardMedia } from '@material-ui/core/';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '65.25%', // 16:9
  },
};

function Intro4(props) {
  const {classes} = props;
  return (
    <Grid container alignContent='center' alignItems='center' justify='center'>
      <Grid item lg={12}>
          <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="e1.jpg"
          title="Evolving Wisdom Websites"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Evolving Wisdom Websites 
          </Typography>
          <Typography component="p">
            
 Evolving Wisdom Websites utilize WordPress, HTML5, Sass, and Salesforce.
          </Typography>
        </CardContent>
       <CardActions>
            <Button href="/projects/project4" dense color="primary">
              More
            </Button>
            <Button href="https://evolvingwisdom.com" dense color="primary">
              Website
            </Button>
          </CardActions>
      </Card>
      </Grid>
    </Grid>
  );
}

Intro4.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Intro4);
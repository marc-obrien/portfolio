import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, Typography, Grid, Button, CardContent, CardActions, CardMedia } from '@material-ui/core/';
import Slide from '@material-ui/core/Slide';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '66.25%', // 16:9
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function Intro1(props) {
  const {classes} = props;
  return (
    <Grid container alignContent='center' alignItems='center' justify='center'>
      <Grid item lg={12}>
          <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="k1.jpg"
          title="KQED Website"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            KQED.org Redesign
          </Typography>
          <Typography component="p">
            
  Complete Website redesign and architecture utilizing React, Redux, and Elasticsearch.
             
          </Typography>
        </CardContent>
       <CardActions>
            <Button href="/projects/project1" dense color="primary" TransitionComponent={Transition}>
              More
            </Button>
            <Button href="https://kqed.org/listen/" dense color="primary">
              Website
            </Button>
          </CardActions>
      </Card>
      </Grid>
    </Grid>
  );
}

Intro1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Intro1);
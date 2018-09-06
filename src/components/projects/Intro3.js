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
    paddingTop: '60.25%', // 16:9
  },
};

function Intro3(props) {
  const {classes} = props;
  return (
    <Grid container alignContent='center' alignItems='center' justify='center'>
      <Grid item lg={12}>
          <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="k3.jpg"
          title="KQED Radio Schedule"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            KQED.org Radio Schedule 
          </Typography>
          <Typography component="p">
            
 Radio Schedule application with API, backend content managment system built with React, Node, and MongoDB.
          </Typography>
        </CardContent>
       <CardActions>
            <Button href="/projects/project3" dense color="primary">
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

Intro3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Intro3);
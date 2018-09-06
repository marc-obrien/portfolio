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
    paddingTop: '66.25%', // 16:9
  },
};

function Intro2(props) {
  const {classes} = props;
  return (
    <Grid container alignContent='center' alignItems='center' justify='center'>
      <Grid item lg={12}>
          <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="ciThumb.jpg"
          title="KQED Pipeline"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            CI/CD Code Pipeline
          </Typography>
          <Typography component="p">
            Code as infrastructure utilizing Docker Containers on AWS ECS.

          </Typography>
        </CardContent>
       <CardActions>
            <Button href="/projects/project2" dense color="primary">
              More
            </Button>
          </CardActions>
      </Card>
      </Grid>
    </Grid>
  );
}

Intro2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Intro2);
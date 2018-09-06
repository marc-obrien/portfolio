import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, LinearProgress, Grid }  from '@material-ui/core/';
import { red, blue, yellow, deepOrange, green, amber, lime, indigo, orange } from '@material-ui/core/colors/'; 

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  root: {
    flexGrow: 1,
  },
    bar100: {
    width: '100%',
    boxShadow: 'none',
    backgroundColor: red['500'],
    padding: 3,
    marginTop: 10,
  },
    bar95: {
    width: '95%',
    boxShadow: 'none',
    backgroundColor: red['500'],
    padding: 3,
    marginTop: 20,
  },
    bar90: {
    width: '90%',
    boxShadow: 'none',
    backgroundColor: deepOrange['500'],
    padding: 3,
    marginTop: 10,
  },
    bar85: {
    width: '85%',
    boxShadow: 'none',
    backgroundColor: orange['500'],
    padding: 3,
    marginTop: 10,
  },
    bar82: {
    width: '82%',
    boxShadow: 'none',
    backgroundColor: amber['500'],
    padding: 3,
    marginTop: 20,
  },
    bar80: {
    width: '80%',
    boxShadow: 'none',
    backgroundColor: blue['500'],
    padding: 3,
    marginTop: 10,
  },
    bar75: {
    width: '75%',
    boxShadow: 'none',
    backgroundColor: indigo['500'],
    padding: 3,
    marginTop: 10,
  },
  bar70: {
    width: '70%',
    boxShadow: 'none',
    backgroundColor: yellow['500'],
    padding: 3,
    marginTop: 10,
  },
    bar60: {
    width: '60%',
    boxShadow: 'none',
    backgroundColor: lime['500'],
    padding: 3,
    marginTop: 10,
  },
    bar50: {
    width: '50%',
    boxShadow: 'none',
     padding: 3,
    marginTop: 10,
    backgroundColor: amber['500'],
  },
    bar40: {
    width: '40%',
    boxShadow: 'none',
    backgroundColor: green['500'],
     padding: 3,
    marginTop: 10,
  },
 bar30: {
    width: '30%',
    boxShadow: 'none',
    backgroundColor: deepOrange['500'],
    padding: 3,
    marginTop: 10,
  },
    bar20: {
    width: '20%',
    boxShadow: 'none',
    padding: 3,
    marginTop: 10,
    backgroundColor: indigo['500'],
  },
    bar10: {
    width: '10%',
    boxShadow: 'none',
  },
    bar0: {
    width: '0%',
    boxShadow: 'none',
  },
});

class MySkills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
   <Grid container spacing={24}>
        <Grid item xs={2}>
        <Typography variant="body1" gutterTop align="left">
       Leadership
      </Typography>
        </Grid>

        <Grid item xs={10}>
        <LinearProgress color="deepOrange" variant="determinate" className={classes.bar100} />
        </Grid>
      
        <Grid item xs={2}>
        <Typography variant="body1" gutterBottom align="left">
       Agile Process
      </Typography>
        </Grid>

        <Grid item xs={10}>
        <LinearProgress color="red" variant="determinate"  className={classes.bar95} />
        </Grid>
      
        <Grid item xs={2}>
        <Typography variant="body1" gutterBottom align="left">
       React
      </Typography>
        </Grid>

    <Grid item xs={10}>
               <LinearProgress color="deepOrange" variant="determinate"  className={classes.bar90} />
        </Grid>

        <Grid item xs={2}>
        <Typography variant="body1" gutterBottom align="left">
       JavaScript
      </Typography>
        </Grid>
   <Grid item xs={10}>
               <LinearProgress color="deepOrange" variant="determinate"  className={classes.bar90} />
        </Grid>

   <Grid item xs={2}>
        <Typography variant="body1" gutterBottom align="left">
       Node.js
      </Typography>
        </Grid>

        <Grid item xs={10}>
        <LinearProgress color="orange" variant="determinate"  className={classes.bar85} />
        </Grid>
      
        <Grid item xs={2}>
        <Typography variant="body1" gutterBottom align="left">
       Express
      </Typography>
        </Grid>

   <Grid item xs={10}>
               <LinearProgress color="blue" variant="determinate"  className={classes.bar85} />
        </Grid>

      
        <Grid item xs={2}>
        <Typography variant="body1" gutterBottom align="left">
       AWS
      </Typography>
        </Grid>

   <Grid item xs={10}>
               <LinearProgress variant="determinate"  color="orange" className={classes.bar80} />
        </Grid>

        <Grid item xs={2}>
        <Typography variant="body1" gutterBottom align="left">
       Continous Integration
      </Typography>
        </Grid>

        <Grid item xs={10}>
        <LinearProgress variant="determinate"  color="blue" className={classes.bar82} />
        </Grid>
      
        <Grid item xs={2}>
        <Typography variant="body1" gutterBottom align="left">
       CSS/Sass
      </Typography>
        </Grid>

   <Grid item xs={10}>
        <LinearProgress variant="determinate"  color="blue" className={classes.bar80} />
        </Grid>



      <Grid item xs={2}>
        <Typography variant="body1" gutterBottom align="left">
       Ruby on Rails
      </Typography>
        </Grid>


        <Grid item xs={10}>
               <LinearProgress variant="determinate"  color="blue" className={classes.bar80} />
        </Grid>
      
        <Grid item xs={2}>
        <Typography variant="body1" gutterBottom align="left">Java
      </Typography>
        </Grid>

        <Grid item xs={10}>
        <LinearProgress variant="determinate"  color="indigo" className={classes.bar80} />
        </Grid>

 <Grid item xs={2}>
          <Typography variant="body1" gutterBottom align="left">MongoDB 
      </Typography>
        </Grid>

   <Grid item xs={10}>
          <LinearProgress variant="determinate"  color="yellow" className={classes.bar75} />
        </Grid>

 <Grid item xs={2}>
          <Typography variant="body1" gutterBottom align="left">Postgres 
      </Typography>
        </Grid>

   <Grid item xs={10}>
          <LinearProgress variant="determinate"  color="yellow" className={classes.bar75} />
        </Grid>

         <Grid item xs={2}>
          <Typography variant="body1" gutterBottom align="left">MySQL
      </Typography>
        </Grid>

   <Grid item xs={10}>
          <LinearProgress variant="determinate"  color="yellow" className={classes.bar75} />
        </Grid>

       <Grid item xs={2}>
        <Typography variant="body1" gutterBottom align="left">
       WordPress
      </Typography>
        </Grid>

        <Grid item xs={10}>
        <LinearProgress color="blue" variant="determinate"  className={classes.bar70} />
        </Grid>
      
        <Grid item xs={2}>
        <Typography variant="body1" gutterBottom align="left">
       Salesforce
      </Typography>
        </Grid>

    <Grid item xs={10}>
               <LinearProgress color="blue" variant="determinate"  className={classes.bar70} />
        </Grid>
               <Grid item xs={2}>
        <Typography variant="body1" gutterBottom align="left">
       Apex
      </Typography>
        </Grid>

        <Grid item xs={10}>
        <LinearProgress color="blue" variant="determinate"  className={classes.bar70} />
        </Grid>
      
        <Grid item xs={2}>
        <Typography variant="body1" gutterBottom align="left">
       Visualforce
      </Typography>
        </Grid>

    <Grid item xs={10}>
               <LinearProgress color="blue" variant="determinate"  className={classes.bar70} />
        </Grid>

 <Grid item xs={2}>
            <Typography variant="body1" gutterBottom align="left">PHP
      </Typography>
        </Grid>
   <Grid item xs={10}>
          <LinearProgress variant="determinate"  color="green" className={classes.bar40} />
        </Grid>

 <Grid item xs={2}>
          <Typography variant="body1" gutterBottom align="left">Angular
      </Typography>
        </Grid>

   <Grid item xs={10}>
          <LinearProgress variant="determinate" color="green" className={classes.bar40} />
        </Grid>


        </Grid>
</div>
       
    );
  }
}

MySkills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MySkills);
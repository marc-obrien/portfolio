import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, ListItemText, ListItem, List, Card, Typography, Grid, CardContent, CardActions, CardHeader, CardMedia, Collapse, Avatar } from '@material-ui/core/';
import blue from '@material-ui/core/colors/blue';
import classnames from 'classnames';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FaCubes, FaDocker, FaAws, FaBitbucket } from 'react-icons/fa';


const styles = theme => ({
  appBar: {
    background: 'transparent', 
    boxShadow: 'none',
  },
    largeIcon: {
    width: 160,
    height: 160,
    fontSize: '48px',
    margin: theme.spacing.unit
  },
    actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
  flex: {
    flex: 1,
  },
  varient3: {
    flex: 1,
    marginLeft: 10,
  },
    title: {
    marginRight: 30,
  },
  card: {
    padding: '2.25%'
  },
    card2: {
    padding: '13.25%',
    align: 'left',
    backgroundColor: blue[500],
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  root: {
    flexGrow: 1,
  },
 paper: {
    padding: 5,
    margin: 10,
  },
  container: {
padding: 38,
  },
});


class Project2 extends React.Component {
 state = { expanded: true };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
  return (

<Grid container spacing={24}>
     
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
          <CardHeader
            title="KQED CI/CD Pipeline"
            subheader="January 10, 2018"
          />
          <CardContent>
            <Typography component="p">
             Continous Integration and Deployment pipeline built utilizing Amazon's Elastic Containers Service with Docker containers. Managing the pipeline as code infrasturcutre allows the Digital Engineering team to continually deploy to production several times a day.
            </Typography>
          </CardContent>

              <CardActions className={classes.actions} disableActionSpacing>
             <Typography className={classes.varient3} paragraph variant="body2">
                Stack:
              </Typography>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
             <List >
        <ListItem>
          <Avatar className={classes.avatar}>
          <FaAws />
          </Avatar>
          <ListItemText primary="AWS, ECS, CodePipeline"/>
        </ListItem>
        <ListItem>
          <Avatar className={classes.avatar}>
               <FaDocker />
          </Avatar>
          <ListItemText primary="Docker Continers" />
        </ListItem>
                 <ListItem>
          <Avatar className={classes.avatar}>
               <FaCubes />
          </Avatar>
          <ListItemText primary="Microservices" />
        </ListItem>
             <ListItem>
          <Avatar className={classes.avatar}>
               <FaBitbucket />
          </Avatar>
          <ListItemText primary="Bitbucket code repositories" />
        </ListItem>
      </List>
              <br />
            </CardContent>
          </Collapse>

        </Card>
          
        </Grid>

   <Grid item xs={12} sm={6}>
        
      <Card className={classes.card2}>
        <CardMedia
          className={classes.media}
          image="../ad.jpg" 
          title="Contemplative Reptile"
        />
      </Card>
         
        </Grid>
      </Grid>
   );
  }
}


Project2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project2);
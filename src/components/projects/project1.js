import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, ListItemText, ListItem, List, Card, Typography, Grid, Button, CardContent, CardActions, CardHeader, CardMedia, Collapse, Avatar } from '@material-ui/core/';
import { red, blue } from '@material-ui/core/colors/';
import classnames from 'classnames';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FaReact, FaDocker, FaWordpress, FaAws } from 'react-icons/fa';

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
    backgroundColor: red[500],
  },
    avatar2: {
    backgroundColor: blue[500],
  },
  flex: {
    flex: 1,
  },
    title: {
    marginRight: 30,
  },
  card: {
    padding: '11.25%'
  },
    card2: {
    padding: '15.25%',
    align: 'left',
    backgroundColor: red[500],
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
    media2: {
    height: 0,
    paddingTop: '86.25%', // 16:9
  },
});


class Project1 extends React.Component {
 state = { expanded: true };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
  return (

<Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
      <Card className={classes.card2}>
        <CardMedia
          className={classes.media2}
          image="../1.jpg" 
          title="KQED Website"
        />
      </Card>


        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
           
         <CardHeader
            title="KQED Website Redesign"
            subheader="March 14, 2018"
          />
          <CardContent>
            <Typography component="p">
              In March 2018 KQED relaunched the site design of its Websites and utilized a listening first user experience in order to make listening to podcasts easier. The stack consits of React, Redux, a custom built Media API, Elasticsearch, and WordPress. 
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
          <FaReact />
          </Avatar>
          <ListItemText primary="React v.16, React Router v.4, Redux"/>
        </ListItem>
        <ListItem>
          <Avatar className={classes.avatar}>
               <FaWordpress />
          </Avatar>
          <ListItemText primary="WordPress Multisite" />
        </ListItem>
             <ListItem>
          <Avatar className={classes.avatar}>
               <FaDocker />
          </Avatar>
          <ListItemText primary="Docker Containers" />
        </ListItem>
        <ListItem>
          <Avatar className={classes.avatar}>
            <FaAws />
          </Avatar>
          <ListItemText primary="AWS, Cloudformation, ECS, EC2, S3, CloudWatch" />
        </ListItem>
      </List>
              <br />
                 <Button variant="contained" href="http://www.kqed.org" color="secondary" className={classes.button}>
        WEBSITE
      </Button>
            </CardContent>
          </Collapse>

        </Card>
      
        </Grid>
      </Grid>
   );
  }
}


Project1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project1);
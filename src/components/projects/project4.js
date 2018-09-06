import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, ListItemText, ListItem, List, Card, Typography, Grid, Button, CardContent, CardActions, CardHeader, CardMedia, Collapse, Avatar } from '@material-ui/core/';
import { blue } from '@material-ui/core/colors/';
import classnames from 'classnames';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FaSass, FaHtml5, FaWordpress } from 'react-icons/fa';

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
    backgroundColor: blue[800],
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
    backgroundColor: blue[800],
  },
      button2: {
    backgroundColor: blue[800],
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


class Project4 extends React.Component {
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
          image="../ew.jpg" 
          title="Evolving Wisdom Websites"
        />
      </Card>


        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
           
         <CardHeader
            title="Evolving Wisdom Websites"
            subheader="April 22, 2015"
          />
          <CardContent>
            <Typography component="p">
              Evolving Wisdom offers transformative personal growth courses. The tech stack utilies WordPress Websites and Salesforce integrations to provide the user community access to their content. 
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
          <FaWordpress />
          </Avatar>
          <ListItemText primary="WordPress Websites"/>
        </ListItem>
        <ListItem>
          <Avatar className={classes.avatar}>
               <FaSass />
          </Avatar>
          <ListItemText primary="Sass" />
        </ListItem>
             <ListItem>
          <Avatar className={classes.avatar}>
               <FaHtml5 />
          </Avatar>
          <ListItemText primary="HTML5" />
        </ListItem>
      </List>
              <br />
                 <Button variant="contained" href="http://www.evolvingwisdom.com" target="_blank" color="secondary" className={classes.button2}>
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


Project4.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project4);
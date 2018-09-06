import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { Typography, List, ListItem, Card, CardHeader, CardContent, CardActions, Avatar, IconButton } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import Collapse from '@material-ui/core/Collapse';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  root: {
    width: '100%',
  },
    card: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
 height: 60,
    width: 60,
  padding: 5,
  },
  heading: {
    fontSize: theme.typography.pxToRem(10),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(10),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 90,
    width: 90,
  },
  details: {
    alignItems: 'left',
    flexBasis: '100%',
  },
  column: {
    flexBasis: '33.33%',
  },
    column2: {
    flexBasis: '90%',
  },
      dlist: {
    marginTop: -20,
     padding: 5,
     flexBasis: '40%',
  },
      dlist2: {
    padding: 5,
    marginLeft: 2,
    flexBasis: '90%',
  },
    star: {
    marginRight: 20,
  },
});

const resume = [
    {
    company: 'Apple',
    title: 'Sr. Lead Developer',
    date: '2014-2016',
    description:
      'Acted as a subject matter expert by guiding the development of mobile optimization processes associated with the Apple Online Store and the AppleCare Chat application.',
    dlist:
    'Managed improvements to the Apple online chat application and established tracking to monitor its server performance.',
    dlist2:
    'Exemplified hands-on proficiency by building proof of concepts that structured code refactoring.',
    dlist3:
    'Utilized JavaScript frameworks including Backbone, Ember, and Angular to improve overall user experience and perforamnce.',
    dlist4:
    'Tracked and provided end-to-end user data to insure applications ran smoothly from client to server.',
  },
];


class Job3 extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

  return (
    <div className={classes.root}>
   {resume.map(resume => ( 
     <Card className={classes.card}>

        <CardHeader
          avatar={
            <Avatar aria-label="KQED" className={classes.avatar}>
              {resume.company} 
            </Avatar>
          }
      
          title={resume.title}
          subheader={resume.date} 
        />
    
        <CardContent>
          <Typography component="p">
           {resume.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
     
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
                <List>
                  <ListItem className={classes.dlist}>
                   <StarIcon className={classes.star}/> {resume.dlist} 
                  </ListItem> 
                   <ListItem className={classes.dlist2}>
                   <StarIcon className={classes.star}/> {resume.dlist2} 
                  </ListItem> 
                    <ListItem className={classes.dlist2}>
                   <StarIcon className={classes.star}/> {resume.dlist3} 
                  </ListItem> 
                    <ListItem className={classes.dlist2}>
                   <StarIcon className={classes.star}/> {resume.dlist4} 
                  </ListItem> 
                  </List>
          </CardContent>
        </Collapse>
      </Card>
         ))}
    </div>
   );
  }
}

Job3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Job3);
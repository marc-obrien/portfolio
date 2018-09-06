import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { Typography, List, ListItem, Card, CardHeader, CardContent, CardActions, Avatar, IconButton } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import Collapse from '@material-ui/core/Collapse';
import purple from '@material-ui/core/colors/purple';

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
    backgroundColor: purple['A200'],
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
    company: 'EW',
    title: 'Engineering Manager',
    date: '2014-2016',
    description:
      'Spearheaded the development and implementation of an automated cloud marketing strategy by managing 10 developers and contractors; this entailed performing data analysis to facilitate optimal decision making and guiding the migration of server infrastructure. Recommended AWS architecture to facilitate high volume web traffic.',
    dlist:
    'Managed and led a team of 10 distributed software engineers including fullstack, backend, frontend, and user experience.',
    dlist2:
    'Established and configured Salesforce, Salesforce Marketing Cloud, and Desk.com.',
    dlist3:
    'Continuously delivered full-stack web application design, management and support.',
    dlist4:
    'Improved marketing performance by integrating the capabilities of Salesforce, Salesforce Marketing Cloud, Desk.com, Stripe, Woocommerce, PayPal, Google Analytics, and Ambassador.',
  },
];


class Job2 extends React.Component {
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

Job2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Job2);
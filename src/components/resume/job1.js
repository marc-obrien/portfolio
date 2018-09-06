import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { Typography, List, ListItem, Card, CardHeader, CardContent, CardActions, Avatar, IconButton } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import Collapse from '@material-ui/core/Collapse';
import pink from '@material-ui/core/colors/pink';

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
    backgroundColor: pink['A100'],
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
    company: 'KQED',
    title: 'Engineering Director',
    date: '2016-2018',
    description:
      'Consistently exhibit subject matter expertise by implementing a full spectrum of software engineering processes and training a team of engineers. Oversee AWS (Amazon Web Services) infrastructure.',
    dlist:
    'Leveraged leadership skills to deliver projects, including managing project workflow, scheduling, and budgets',
    dlist2: 
    'Executed Agile Scrum processes to ensure consistent project quality.',
    dlist3:
    'Successfully established a continuous integration and deployment strategy utilizing AWS, code deployments, automations, and infrastructure.',
    dlist4:
    'Enhanced existing functions, including introducing the Agile sprint process and initiating a continuous integration and development pipeline, which improved the code deployment process.'
  },
];


class Job1 extends React.Component {
  state = { expanded: true };

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

Job1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Job1);
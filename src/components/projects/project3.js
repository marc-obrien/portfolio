import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Button, CardContent, CardHeader, CardMedia } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
    media: {
    height: 0,
    paddingTop: '65.25%', // 16:9
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

class Project3 extends React.Component {
  state = { expanded: true };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

render() {
    const { classes } = this.props;
  return (
    <React.Fragment>
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        <Card className={classes.card}>
             <CardHeader
            title="KQED Radio Schedule App"
            subheader="February 3, 2018"
          />
        <CardMedia
          className={classes.media}
          image="../fl.jpg" 
          title="KQED Radio Schedule"
        />
        <CardContent>
            <Typography component="p">
             KQED's Radio Schedule app waw built to allow end users to quickly browse and click through for more inforamaion on what's airing on KQED FM radio. The app features a front end client and backend server component built with React, Redux, MongoDB, Feathers.js, and Node. The backend allowed radio producers to quickly edit and add radio schedule content so that schedule data could be published in real time to the KQED.org Website.
            </Typography>
   
            
              <br />
                 <Button variant="contained" href="http://www.kqed.org" color="secondary" className={classes.button}>
        WEBSITE
      </Button>
            </CardContent>

        </Card>
        </div>
        {/* End hero unit */}
         
  
      </main>
     
    </React.Fragment>
   );
  }
}


Project3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project3);
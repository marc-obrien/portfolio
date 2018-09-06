import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import {withRouter} from 'react-router-dom';
import Intro1 from './projects/Intro1'
import Intro2 from './projects/Intro2'
import Intro3 from './projects/Intro3'
import Intro4 from './projects/Intro4'

const styles = theme => ({
  root: {
       flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 1,
  },
});



class RecentWork extends Component {  
  render() {

    return (
      <Grid container spacing={24}>
         <Grid item xs={12} sm={6} lg={4} xl={3}>
       <Intro1/>
        </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
         <Intro2/>
        </Grid>
           <Grid item  xs={12} sm={6} lg={4} xl={3}>
       <Intro3/>
        </Grid>
     
              <Grid item  xs={12} sm={6} lg={4} xl={3}>
       <Intro4/>
        </Grid>

      </Grid>
    );
  }
}

export default withRouter(withStyles(styles, {withTheme: true})(RecentWork));
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, Chip, Paper } from '@material-ui/core/';
import { FaReact } from 'react-icons/fa';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
    color: '#fff',
    backgroundColor:'red',
    fontWeight:'bold'
  },
  label: {
    color: 'white'
  }
});

class Skills extends React.Component {
  state = {
    chipData: [
      { key: 0, label: 'Leadership' },
      { key: 1, label: 'React' },
      { key: 2, label: 'Redux' },
      { key: 3, label: 'NodeJS' },
      { key: 4, label: 'Express' },
      { key: 5, label: 'Ruby' },
      { key: 6, label: 'Java' },
      { key: 7, label: 'PHP' },
      { key: 8, label: 'Python' },
      { key: 9, label: 'HTML5' },
      { key: 10, label: 'Git' },
      { key: 11, label: 'AWS' },
      { key: 12, label: 'CSS' },
      { key: 13, label: 'CI/CD' },
      { key: 14, label: 'C++' },
      { key: 15, label: 'PHP' },
      { key: 16, label: 'Agile' },
      { key: 17, label: 'Web Development' },
      { key: 18, label: 'Mobile' },
      { key: 19, label: 'Data Structures' },
    ],
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        {this.state.chipData.map(data => {
          let avatar = null;

          if (data.label === 'React') {
            avatar = (
              <Avatar>
              <FaReact />
              </Avatar>
            );
          }

          return (
            <Chip
              key={data.key}
              avatar={avatar}
              label={data.label}
              className={classes.chip}
              color="secondary"
            />
          );
        })}
      </Paper>
    );
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);
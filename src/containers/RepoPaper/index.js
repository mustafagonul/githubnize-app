import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import { withStyles } from 'material-ui/styles';
import AutoComplete from '../AutoComplete';
import Markdown from 'react-remarkable';

import api from '../../configs/api';


const styles = theme => ({
  tags: {
    display: 'flex',
    'flex-direction': 'row',
    'flexWrap': 'wrap'
  },
  chip: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  }
});


class RepoPaper extends Component {
  state = {
    repoReadMe: 'Mustafa'
  }

  componentWillReceiveProps(newProps) {
    api.getRepoReadMe(newProps.currentRepo).then((response) => {

      this.setState({ repoReadMe: response });
    });
  }

  onAdd = () => {

  }

  onDelete = () => {

  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.tags}>
          <Chip label="Tag 1" className={ classes.chip } onDelete={this.onDelete} />
          <Chip label="Tag 2" className={ classes.chip } onDelete={this.onDelete} />
          <Chip label="Tag 3" className={ classes.chip } onDelete={this.onDelete} />
          <AutoComplete />

          <Button fab mini color="primary" aria-label="add" className={ classes.button }>
            <AddIcon />
          </Button>
        </Paper>
        <Paper>
          <Typography>
            <Markdown>
            { this.state.repoReadMe }
            </Markdown>
          </Typography>
        </Paper>
      </div>
    );
  }
}


RepoPaper.propTypes = {
}

export default connect(
  state => ({
    currentRepo: state.tag.get('currentRepo'),
  })
)(withStyles(styles, { withTheme: true })(RepoPaper));


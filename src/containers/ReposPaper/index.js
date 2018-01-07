import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Grade from 'material-ui-icons/Grade';
import Pagination from '../Pagination';

import api from '../../configs/api';



class ReposPaper extends Component {
  state = {
    repos: []
  };

  componentWillReceiveProps(newProps) {
    if (newProps.allstars) {
      api.getAllstars().then((response) => {
        const all = response.map(item => item.name);
        this.setState({ repos: all });
      });

      return;
    }

    if (newProps.untagged) {
      this.setState({ repos: [] });
    }
  }

  selectRepo = (repo) => {
    console.log('Select Repo: ', repo);
  }

  selectPage = (number) => {
    console.log(number);
  }

  render() {
    return (
      <div>
      <Paper>
        <Pagination
          total = { 5 }
          current = { 1 }
          display = { 3 }
          onChange = { this.selectPage }
        />
      </Paper>
      <Paper>
        <List> {
          this.state.repos.map((repo) =>
            <ListItem button key={ repo } onClick={ this.selectRepo }>
              <Grade color="contrast" />
              <ListItemText primary={ repo } />
            </ListItem>
          )
        } </List>
      </Paper>
      </div>
    );
  }
}

ReposPaper.propTypes = {
  allstars: PropTypes.bool.isRequired,
  untagged: PropTypes.bool.isRequired,
  currentTag: PropTypes.string,
}

export default connect(
  state => ({
    allstars: state.tag.get('allstars'),
    untagged: state.tag.get('untagged'),
    currentTag: state.tag.get('currentTag'),
  })
)(ReposPaper);


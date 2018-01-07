import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Grade from 'material-ui-icons/Grade';
import Pagination from '../Pagination';
import parseLinkHeader from 'parse-link-header';

import api from '../../configs/api';
import { requestGetRepo } from '../../actions/tag';


class ReposPaper extends Component {
  state = {
    repos: [],
    currentPage: 0,
    pageCount: 0
  };

  componentWillMount() {
    this.getAllStars();
  }

  componentWillReceiveProps(newProps) {
    this.getRepos(newProps);
  }

  getRepos = (props, page = null) => {
    if (props.allstars) {
      this.getAllStars(page);

      return;
    }

    if (props.untagged) {
      this.setState({ repos: [] });

      return;
    }

    if (props.currentTag) {

    }
  }

  getAllStars = (page = null) => {
    api.getAllstars(page).then((response) => {
      const all = response.data.map(item => ({ name: item.name, full_name: item.full_name }));

      this.setState({ repos: all });

      if (page === null) {
        const link = parseLinkHeader(response.link);

        this.setState({
          pageCount: Number(link.last.page),
          currentPage: 1
        });
      }
      else {
        this.setState({ currentPage: page });
      }
    });
  }

  selectPage = (number) => {
    this.getRepos(this.props, number);
  }

  selectRepo = (repo, event) => {
    console.log('Select Repo: ', repo);

    this.props.dispatch(requestGetRepo(repo));
  }

  render() {
    return (
      <div>
      <Paper>
        <Pagination
          total = { this.state.pageCount }
          current = { this.state.currentPage }
          display = { 5 }
          onChange = { this.selectPage }
        />
      </Paper>
      <Paper>
        <List> {
          this.state.repos.map((repo) =>
            <ListItem button key={ repo } onClick={ event => this.selectRepo(repo.full_name, event) }>
              <Grade color="contrast" />
              <ListItemText primary={ repo.name } />
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


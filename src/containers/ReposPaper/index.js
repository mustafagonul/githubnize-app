import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemText } from 'material-ui/List';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import StarIcon from 'material-ui-icons/Star'
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
      this.getTagRepos(props.currentTag);

      return;
    }
  }

  getAllStars = (page = null) => {
    api.getAllstars(page).then((response) => {
      const all = response.data.map(item => ({ owner: item.owner.login, repo: item.name }));

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

  getTagRepos = slug => {
    api.getTag(slug).then((response) => {
      const all = response.map(item => ({ owner: item.owner, repo: item.repo }));

      this.setState({ repos: all });
      this.setState({
        pageCount: 0,
        currentPage: 0,
      });
    });
  }

  selectPage = (number) => {
    this.getRepos(this.props, number);
  }

  selectRepo = (owner, repo, event) => {
    console.log('Select Repo: ', owner, repo);

    this.props.dispatch(requestGetRepo(owner, repo));
  }

  render() {
    return (
      <div>
        { this.state.pageCount > 1 ?
          <Paper>
            <Pagination
              total = { this.state.pageCount }
              current = { this.state.currentPage }
              display = { this.state.pageCount < 5 ? this.state.pageCount : 5 }
              onChange = { this.selectPage }
            />
          </Paper>: <div/>
        }
      <Paper>
        <List> {
          this.state.repos.map((item, i) =>
            <ListItem button key={ i } onClick={ event => this.selectRepo(item.owner, item.repo, event) }>
              { item.owner === this.props.currentOwner && item.repo === this.props.currentRepo ? <StarIcon color="contrast" /> : <StarBorderIcon color="contrast" /> }
              <ListItemText primary={ item.repo } />
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
    currentOwner: state.tag.get('currentOwner'),
    currentRepo: state.tag.get('currentRepo'),
  })
)(ReposPaper);


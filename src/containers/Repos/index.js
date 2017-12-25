import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'

import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';

import api from '../../configs/api';

import './style.css';


class Repos extends Component {
  /* TODO mustafa: check why it is not working
  constructor(props) {
    super(props);

    this.setState({ repos: [] });
  }
  */

  componentWillMount() {
    this.setState({ repos: [] });
  }


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

  render() {
    return (
      <div>
        <List>
          { this.state.repos.map((repo) =>
            <ListItem primaryText={repo} leftIcon={<ActionGrade />} />
          )}
        </List>
      </div>
    );
  }
}


Repos.propTypes = {
  allstars: PropTypes.bool.isRequired,
  untagged: PropTypes.bool.isRequired,
  current: PropTypes.string,
}

export default connect(
  state => ({
    allstars: state.tag.get('allstars'),
    untagged: state.tag.get('untagged'),
    current: state.tag.get('current'),
  })
)(Repos);


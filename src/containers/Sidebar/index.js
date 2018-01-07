import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ToggleStarBorder from 'material-ui-icons/StarBorder';
import SocialPublic from 'material-ui-icons/Public';
import MapsLocalOffer from 'material-ui-icons/LocalOffer';

import { requestAllStarred, requestUntagged } from '../../actions/tag';

import Command from '../Command';


import './style.css';


class Sidebar extends Component {
  componentDidMount() {
    this.showAllstars();
  }

  showAllstars() {
    this.props.dispatch(requestAllStarred());
  }

  showUntagged() {
    this.props.dispatch(requestUntagged());
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

Sidebar.propTypes = {

}

export default connect()(Sidebar);



/*
export default connect(
  state => ({

  }), {
    requestAllStarred,
    requestUntagged,
  }
)(Sidebar);
*/


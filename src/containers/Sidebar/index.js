import React, { Component} from 'react';
import { PropTypes } from 'prop-types';
import{ connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border';
import SocialPublic from 'material-ui/svg-icons/social/public';
import MapsLocalOffer from 'material-ui/svg-icons/maps/local-offer';

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
        <Command />
        <Divider />
        <List>
          <ListItem onClick={this.showAllstars.bind(this)} primaryText="All Stars" leftIcon={<SocialPublic />} />
          <ListItem onClick={this.showUntagged.bind(this)} primaryText="Untagged" leftIcon={<ToggleStarBorder />} />
        </List>
        <Divider />
        <List>
          <ListItem primaryText="All mail" leftIcon={<MapsLocalOffer />} />
        </List>
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


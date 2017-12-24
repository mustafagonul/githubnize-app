import React, { Component} from 'react';
import { PropTypes } from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border';
import SocialPublic from 'material-ui/svg-icons/social/public';
import MapsLocalOffer from 'material-ui/svg-icons/maps/local-offer'


import './style.css';


class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <List className="sidebar-list">
          <ListItem primaryText="Unstarred" leftIcon={<ToggleStarBorder />} />
          <ListItem primaryText="All Stars" leftIcon={<SocialPublic />} />
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

export default Sidebar;

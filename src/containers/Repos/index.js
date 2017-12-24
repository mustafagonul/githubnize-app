import React, { Component} from 'react';
import { PropTypes } from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';


import './style.css';


class Repos extends Component {

  render() {
    return (
      <div>
        <List>
          <ListItem style={{color:'gray'}} primaryText="Inbox" leftIcon={<ContentInbox />} />
          <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
          <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
          <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
          <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        </List>
      </div>
    );
  }
}

Repos.propTypes = {

}

export default Repos;

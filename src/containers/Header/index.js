import React, { Component} from 'react';
import { PropTypes } from 'prop-types';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import ActionAccountBox from 'material-ui/svg-icons/action/account-box';
// import { GreyBlue500 } from 'material-ui/styles/colors'

import './style.css';

/*
const toolbarStyle = {
  backgroundColor: GreyBlue500
}
*/


class Header extends Component {

  render() {
    return (
      <div >
      <Toolbar>
        <ToolbarGroup />
        <ToolbarGroup>
          <ToolbarTitle text="GitHubNize" />
          <Avatar icon={<ActionAccountBox />} />
        </ToolbarGroup>
      </Toolbar>
      </div>
    );
  }
}

export default Header;

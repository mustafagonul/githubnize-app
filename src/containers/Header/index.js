import React, { Component} from 'react';
import { PropTypes } from 'prop-types';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import ActionAccountBox from 'material-ui/svg-icons/action/account-box';

import './style.css';


class Header extends Component {

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true} />
        <ToolbarGroup>
          <ToolbarTitle text="Githubnize" />
          <Avatar icon={<ActionAccountBox />} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

Header.propTypes = {

}

export default Header;

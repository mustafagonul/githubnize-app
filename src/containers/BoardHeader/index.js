import React, { Component} from 'react';
import { PropTypes } from 'prop-types';
import Toolbar from 'material-ui/Toolbar'
import Chip from 'material-ui/Chip';

import './style.css';


class BoardHeader extends Component {

  render() {
    return (
      <Toolbar>
        <Chip>
          Mustafa
        </Chip>
      </Toolbar>
    );
  }
}

BoardHeader.propTypes = {

}

export default BoardHeader;

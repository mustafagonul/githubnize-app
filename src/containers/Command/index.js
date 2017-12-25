import React, { Component} from 'react';
import { PropTypes } from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './style.css';


const style = {
  margin: 12,
};



class Command extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }


  }

  addTag() {

  }

  updateTag(tag) {

  }

  deleteTag() {

  }

  render() {
    return (
      <div>
        <TextField hintText="Enter Tag" />
        <RaisedButton label="Add" primary={true} style={style} />
        <RaisedButton label="Delete" secondary={true} style={style} />
      </div>
    );
  }
}

Command.propTypes = {

}



export default Command;

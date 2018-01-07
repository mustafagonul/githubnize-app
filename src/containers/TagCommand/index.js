import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';


import { requestAddTag, requestDeleteTag } from '../../actions/tag';


const styles = theme => ({
  textField: {
    width: '100%'
  },
  button: {
    margin: theme.spacing.unit,
  },
  buttons: {
    display: 'flex',
    'flex-direction' : 'row',
  },
  icon: {
    'margin-right': theme.spacing.unit,
  }
});



class TagCommand extends Component {

  state = {
    tag: ''
  };

  getTag = () =>{
    return this.state.tag;
  }

  setTag = newTag => {
    this.setState({ tag: newTag });
  }

  resetTag = () => {
    this.setState({ tag: '' });
  }

  updateTag = (event) => {
    this.setTag(event.target.value);
  }

  addTag = () => {
    const tag = this.getTag();
    this.resetTag();

    this.props.dispatch(requestAddTag(tag));
  }

  deleteTag = () => {
    this.props.dispatch(requestDeleteTag());
  }

  editTag = () => {

  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <TextField placeholder="Enter Tag" value={ this.state.tag } className={ classes.textField } onChange={this.updateTag}  />
        <div className={ classes.buttons }>

          <Button raised color="primary" className={ classes.button } onClick={this.addTag}>
            <AddIcon className={ classes.icon } />
            Add
          </Button>

          <Button raised color="accent" className={ classes.button } onClick={this.deleteTag}>
            <DeleteIcon className={ classes.icon } />
            Delete
          </Button>
          { /* TODO mustafa
          <Button raised color="contrast" className={ classes.button } onClick={this.editTag}>
            <ModeEditIcon className={ classes.icon } />
            Edit
          </Button>
          */ }
        </div>
      </div>
    );
  }
}


export default connect()(withStyles(styles, { withTheme: true })(TagCommand));

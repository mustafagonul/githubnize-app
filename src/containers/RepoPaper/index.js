import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import { withStyles } from 'material-ui/styles';
import AutoComplete from '../AutoComplete';
import Markdown from 'react-remarkable';

import api from '../../configs/api';
import { requestAddRepo, requestDeleteRepo } from '../../actions/tag';


const styles = theme => ({
  tags: {
    display: 'flex',
    'flex-direction': 'row',
    'flexWrap': 'wrap',
    padding: 16
  },
  chip: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  readMe: {
    padding: 16,
  }
});


class RepoPaper extends Component {
  state = {
    currentTag: null,
    currentTagDirty: false,
    repoTags: [],
    repoReadMe: ''
  }

  componentWillReceiveProps(newProps) {
    this.repoPaperUpdate(newProps);
  }

  repoPaperUpdate = props => {
    if (props.currentOwner == null || props.currentRepo == null) {
      this.setState({ repoTags: [] });
      this.setState({ repoReadMe: '' });

      return;
    }

    api.getRepo(props.currentOwner, props.currentRepo).then((response) => {

      console.log(response);

      const all = response.map(item => ({
        owner: item.owner, repo: item.repo, slug: item.slug
      }));

      this.setState({ repoTags: all });
    });

    api.getRepoReadMe(props.currentOwner, props.currentRepo).then((response) => {
      this.setState({ repoReadMe: response });
    });
  }

  getRepoTags = () => {

  }

  onAddTag = () => {
    const owner = this.props.currentOwner;
    const repo = this.props.currentRepo;
    const tag = this.state.currentTag;

    console.log('repo', repo);

    if (owner && repo && tag) {
      console.log('on add tag');

      this.props.dispatch(requestAddRepo(owner, repo, tag));

      this.setState({ currentTagDirty: true});
    }
  }

  onDeleteTag = (event, tag) => {
    const owner = this.props.currentOwner;
    const repo = this.props.currentRepo;

    console.log('repo', repo);

    if (owner && repo && tag) {
      console.log('on delete tag');

      this.props.dispatch(requestDeleteRepo(owner, repo, tag));
    }
  }

  onSelectTag = tag => {
    this.setState({ currentTag: tag });
  }

  render() {
    const { classes } = this.props;
    const dirty = this.state.currentTagDirty;

    if (dirty) {
      this.setState({ currentTagDirty: false });
    }

    return (
      <div>
        <Paper className={classes.tags}>
          {
            this.state.repoTags.map((item, i) =>
              <Chip label={ item.slug } key={ i } className={ classes.chip } onDelete={ event => this.onDeleteTag(event, item.slug) } />
            )
          }
          <AutoComplete clearValue={ dirty } onSelectTag={ this.onSelectTag } />
          <Button fab mini color="primary" onClick={ this.onAddTag } aria-label="add" className={ classes.button }>
            <AddIcon />
          </Button>
        </Paper>
        <Paper className={ classes.readMe }>
          <Typography>
            <Markdown>
            { this.state.repoReadMe }
            </Markdown>
          </Typography>
        </Paper>
      </div>
    );
  }
}


RepoPaper.propTypes = {
  currentOwner: PropTypes.string,
  currentRepo: PropTypes.string,
}

export default connect(
  state => ({
    currentOwner: state.tag.get('currentOwner'),
    currentRepo: state.tag.get('currentRepo'),
    loading: state.tag.get('loading'),
  })
)(withStyles(styles, { withTheme: true })(RepoPaper));

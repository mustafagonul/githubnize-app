import React, { Component}  from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import List, { ListItem, ListItemText } from 'material-ui/List';
import SocialPublic from 'material-ui-icons/Public';
import ToggleStarBorder from 'material-ui-icons/StarBorder';
import StarIcon from 'material-ui-icons/Star'
import MapsLocalOffer from 'material-ui-icons/LocalOffer';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import TagCommand from '../TagCommand';
import { requestAllStarred, requestUntagged, requestTag } from '../../actions/tag';
import api from '../../configs/api';


const styles = theme => ({
  list: {
    'margin-top': 70
  }
})


class TagDrawer extends Component {
  state = {
    tags: [],
  };

  componentDidMount() {
    this.showAllstars();
  }

  componentWillReceiveProps() {
    api.getTags().then((response) => {
      this.setState({ tags: response });
    });
  }

  showAllstars = () => {
    this.props.dispatch(requestAllStarred());
  }

  showUntagged = () => {
    this.props.dispatch(requestUntagged());
  }

  showTag = (slug, event) => {
    this.props.dispatch(requestTag(slug));
  }

  render() {
    const { classes } = this.props;

    return(
        <Drawer
          open={this.props.open}
          onClose={this.props.closeTagDrawer}
          classes={{ paper: classes.drawerPaper }}
        >
          <AppBar>
            <Toolbar>
              <IconButton className={classes.menuButton} aria-label="Menu">
                <MenuIcon onClick={this.props.closeTagDrawer} />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                Tags
              </Typography>
            </Toolbar>
          </AppBar>

          <div className={classes.list}>
            <List>
              <ListItem>
                <TagCommand />
              </ListItem>
              <Divider />
              <ListItem button onClick={ this.showAllstars }>
                <SocialPublic color="contrast" />
                <ListItemText primary="All Stars" />
              </ListItem>
              <ListItem button onClick={ this.showUntagged }>
                <ToggleStarBorder color="contrast" />
                <ListItemText primary="Untagged" />
              </ListItem>
              <Divider />
              {
                this.state.tags.map(value => (
                  <ListItem button key={ value.slug } onClick={ (event) => this.showTag(value.slug, event) }>
                    { value.slug === this.props.currentTag ? <StarIcon color="contrast" /> : <MapsLocalOffer color="contrast" /> }
                    <ListItemText primary={ value.name } />
                  </ListItem>
                ))
              }
            </List>
          </div>

        </Drawer>
    );
  }
}


TagDrawer.defaultProps = {
  open: false,
  currentTag: null,
}


TagDrawer.propTypes = {
  open: PropTypes.bool,
  currentTag: PropTypes.string,
}


export default connect(
  state => ({
    currentTag: state.tag.get('currentTag'),
  })
)(withStyles(styles, { withTheme: true })(TagDrawer));
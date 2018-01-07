import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';


import MenuAppBar from '../MenuAppBar';
import TagDrawer from '../TagDrawer';
import ReposPaper from '../ReposPaper';
import RepoPaper from '../RepoPaper';


const styles = theme => ({
  background: {
    color: 'black'
  },
  paper: {
    height: '100%'
  }
});


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagDrawerOpened: false,
    }
  }

  openTagDrawer = () => {
    this.setState({
      tagDrawerOpened: true
    });
  }

  closeTagDrawer = () => {
    this.setState({
      tagDrawerOpened: false
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <MenuAppBar
          openTagDrawer={this.openTagDrawer}
        />
        <TagDrawer
          open={this.state.tagDrawerOpened}
          closeTagDrawer={this.closeTagDrawer}
        />

        <Grid container spacing={30}>
          <Grid item xs={2}>
            <ReposPaper />
          </Grid>
          <Grid item xs={10}>
            <RepoPaper />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect()(withStyles(styles, { withTheme: true })(Home));


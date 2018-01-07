import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';

import api from '../../configs/api';


const styles = theme => ({
  container: {
    // flexGrow: 1,
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  textField: {
    width: '100%',
  },
});


class IntegrationAutosuggest extends React.Component {
  state = {
    value: '',
    suggestions: [],
    tags: [],
  };

  componentWillMount() {
    this.updateTags();
  }

  componentWillReceiveProps(newProps) {
    this.updateTags();

    if (newProps.clearValue) {
      this.setState({value : '' });
    }
  }

  updateTags() {
    api.getTags().then((response) => {
      this.setState({ tags: response });
    });
  }

  renderInput = (inputProps) => {
    const { classes, autoFocus, value, ref, ...other } = inputProps;

    return (
      <TextField
        autoFocus={autoFocus}
        className={classes.textField}
        value={value}
        inputRef={ref}
        InputProps={{
          classes: {
            input: classes.input,
          },
          ...other,
        }}
      />
    );
  }

  renderSuggestion = (suggestion, { query, isHighlighted }) => {
    const matches = match(suggestion.name, query);
    const parts = parse(suggestion.name, matches);

    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
          {parts.map((part, index) => {
            return part.highlight ? (
              <span key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </span>
            ) : (
              <strong key={String(index)} style={{ fontWeight: 500 }}>
                {part.text}
              </strong>
            );
          })}
        </div>
      </MenuItem>
    );
  }

  renderSuggestionsContainer = (options) => {
    const { containerProps, children } = options;

    return (
      <Paper {...containerProps} square>
        {children}
      </Paper>
    );
  }

  getSuggestionValue = (suggestion) => {
    return suggestion.name;
  }

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
      ? []
      : this.state.tags.filter(suggestion => {
          const keep =
            count < 5 && suggestion.name.toLowerCase().slice(0, inputLength) === inputValue;

          if (keep) {
            count += 1;
          }

          return keep;
        });
  }

  setCurrentTag = (value) => {
    const filtered = this.state.tags.filter(tag => value === tag.name);
    let tag = null;

    if (filtered.length > 0) {
      tag = filtered[0].slug;
    }

    this.props.onSelectTag(tag);
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });

    this.setCurrentTag(newValue);
  };

  render() {
    const { classes } = this.props;

    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={this.renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={this.renderSuggestionsContainer}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={{
          autoFocus: true,
          classes,
          placeholder: 'Enter a Tag',
          value: this.state.value,
          onChange: this.handleChange,
        }}
      />
    );
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntegrationAutosuggest);
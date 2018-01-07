import { createReducer } from '../helpers/redux';
import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  error: null,

  allstars: false,
  untagged: false,
  currentTag: null,

  currentRepo: null,
});

export default createReducer(initialState, {
  // All Stars
  GET_ALLSTARS_START: state => state.set('loading', true),

  GET_ALLSTARS: (state) => state.merge(fromJS({
    loading: false,

    allstars: true,
    untagged: false,
    currentTag: null,
  })),

  GET_ALLSTARS_ERROR: (state, { error }) => state.merge({
    loading: false,
    error: error,
  }),

  // Untagged
  GET_UNTAGGED_START: state => state.set('loading', true),

  GET_UNTAGGED: (state) => state.merge(fromJS({
    loading: false,

    allstars: false,
    untagged: true,
    currentTag: null,
  })),

  GET_UNTAGGED_ERROR: (state, { error }) => state.merge({
    loading: false,
    error: error,
  }),

  // Get Tag
  GET_TAG_START: state => state.set('loading', true),

  GET_TAG: (state, { tag }) => state.merge(fromJS({
    loading: false,

    allstars: false,
    untagged: false,
    currentTag: tag,
  })),

  GET_TAG_ERROR: (state, { error }) => state.merge({
    loading: false,
    error: error,
  }),

  // Add Tag
  ADD_TAG_START: state => state.set('loading', true),

  ADD_TAG: (state, { tag }) => state.merge(fromJS({
    loading: false,

    allstars: false,
    untagged: false,
    currentTag: tag,
  })),

  ADD_TAG_ERROR: (state, { error }) => state.merge({
    loading: false,
    error: error,
  }),

  // Delete Tag
  DELETE_TAG_START: state => state.set('loading', true),

  DELETE_TAG: state => state.merge(fromJS({
    loading: false,

    allstars: true,
    untagged: false,
    currentTag: null,
  })),

  DELETE_TAG_ERROR: (state, { error }) => state.merge({
    loading: false,
    error: error,
  }),

  // Repo
  GET_REPO_START: state => state.set('loading', true),

  GET_REPO: (state, { repo }) => state.merge(fromJS({
    loading: false,

    currentRepo: repo,
  })),

  GET_REPO_ERROR: (state, { error }) => state.merge({
    loading: false,
    error: error,
  }),

  // Other
  CLEAR_ERROR_STATE: (state, { error }) => state.set('error', false),

  CLEAR_ALL: () => initialState,
});
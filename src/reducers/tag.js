import { createReducer } from '../helpers/redux';
import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  error: null,

  allstars: false,
  untagged: false,
  current: null,

  repo: null,
});

export default createReducer(initialState, {
  // All Stars
  GET_ALLSTARS_START: state => state.set('loading', true),

  GET_ALLSTARS: (state) => state.merge(fromJS({
    loading: false,

    allstars: true,
    untagged: false,
    current: null,
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
    current: null,
  })),

  GET_UNTAGGED_ERROR: (state, { error }) => state.merge({
    loading: false,
    error: error,
  }),

  // Tag
  GET_TAG_START: state => state.set('loading', true),

  GET_TAG: (state, { current }) => state.merge(fromJS({
    loading: false,

    allstars: false,
    untagged: false,
    current: current,
  })),

  GET_TAG_ERROR: (state, { error }) => state.merge({
    loading: false,
    error: error,
  }),

  // Repo
  GET_REPO_START: state => state.set('loading', true),

  GET_REPO: (state, { repo }) => state.merge(fromJS({
    loading: false,

    repo: repo,
  })),

  GET_REPO_ERROR: (state, { error }) => state.merge({
    loading: false,
    error: error,
  }),

  // Other
  CLEAR_ERROR_STATE: (state, { error }) => state.set('error', false),

  CLEAR_ALL: () => initialState,
});
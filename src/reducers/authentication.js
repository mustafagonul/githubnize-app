import { createReducer } from '../helpers/redux';
import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  valid: false,
  error: null,
  api_token: null,
  github_token: null,
  user: null,
});

export default createReducer(initialState, {
  SIGN_IN_START: state => state.set('loading', true),

  SIGN_IN_COMPLETE: (state, { data: { api_token, github_token, user }}) => state.merge(fromJS({
    loading: false,
    valid: true,
    error: null,
    api_token,
    github_token,
    user,
  })),

  SIGN_IN_ERROR: (state, { error }) => state.merge({
    loading: false,
    valid: false,
    error: error,
  }),

  CLEAR_ERROR_STATE: (state, { error }) => state.set('error', false),

  CLEAR_AUTH: () => initialState,
});

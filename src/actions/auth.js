import { createAction } from '../helpers/redux';
import api from '../configs/api';

export const signInStart = createAction('SIGN_IN_START');
export const signInComplete = createAction('SIGN_IN_COMPLETE', 'data');

export function githubAuthRequest({ api_token, github_token, user }) {
  return dispatch => {
    dispatch(signInStart());
    localStorage.setItem('api_token', api_token);
    localStorage.setItem('github_token', github_token);
    localStorage.setItem('user', user);
    api.api_token = api_token;
    api.github_token = github_token;

    dispatch(signInComplete({
      api_token,
      github_token,
      user,
    }));
  }
}
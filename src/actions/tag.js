import api from '../configs/api';
import { createAction } from '../helpers/redux';

export const getAllstarsStart = createAction('GET_ALLSTARS_START');
export const getUntaggedStart = createAction('GET_UNTAGGED_START');
export const getTagStart = createAction('GET_TAG_START');
export const addTagStart = createAction('ADD_TAG_START');
export const updateTagStart = createAction('UPDATE_TAG_START');
export const deleteTagStart = createAction('DELETE_TAG_START');
export const getRepoStart = createAction('GET_REPO_START');
export const addRepoStart = createAction('ADD_REPO_START');
export const deleteRepoStart = createAction('DELETE_REPO_START');

export const getAllstars = createAction('GET_ALLSTARS');
export const getUntagged = createAction('GET_UNTAGGED');
export const getTag = createAction('GET_TAG', 'tag');
export const addTag = createAction('ADD_TAG', 'tag');
export const updateTag = createAction('UPDATE_TAG', 'tag');
export const deleteTag = createAction('DELETE_TAG');
export const getRepo = createAction('GET_REPO', 'repo');
export const addRepo = createAction('ADD_REPO', 'repo');
export const deleteRepo = createAction('DELETE_REPO');

export const getAllstarsError = createAction('GET_ALLSTARS_ERROR', 'error');
export const getUntaggedError = createAction('GET_UNTAGGED_ERROR', 'error',);
export const getTagError = createAction('GET_TAG_ERROR', 'error');
export const addTagError = createAction('ADD_TAG_ERROR', 'error');
export const updateTagError = createAction('UPDATE_TAG_ERROR', 'error');
export const deleteTagError = createAction('DELETE_TAG_ERROR', 'error');
export const getRepoError = createAction('GET_REPO_ERROR', 'error');
export const addRepoError = createAction('ADD_REPO_ERROR', 'error');
export const deleteRepoError = createAction('DELETE_REPO_ERROR', 'error');



export function requestAllStarred() {
  return dispatch => {
    dispatch(getAllstarsStart());

    return api.getAllstars().then(
      () => dispatch(getAllstars()),
      (error) => dispatch(getAllstarsError(error))
    );
  }
}

export function requestUntagged() {
  return dispatch => {
    dispatch(getUntaggedStart());

    /*
    return api.getUntagged().then(
      () => dispatch(getUntagged()),
      (error) => dispatch(getUntaggedError(error))
    );
    */

    dispatch(getUntagged());
  }
}

export function requestTag(tag) {
  return dispatch => {
    dispatch(getTagStart());

    return api.getTag(tag).then(
      () => dispatch(getTag(tag)),
      (error) => dispatch(getTagError(error))
    );
  }
}

export function requestAddTag(tag) {
  return dispatch => {
    dispatch(addTagStart());

    return api.addTag(tag).then(
      (data) => dispatch(addTag(data.slug)),
      (error) => dispatch(addTagError(error))
    );
  }
}

export function requestUpdateTag(tag) {
  return dispatch => {
    dispatch(updateTagStart());

    return api.updateTag(tag).then(
      () => dispatch(updateTag(tag)),
      (error) => dispatch(updateTagError(error))
    );
  }
}

export function requestDeleteTag(tag) {
  return dispatch => {
    dispatch(deleteTagStart());

    return api.deleteTag(tag).then(
      () => dispatch(deleteTag()),
      //(error) => dispatch(deleteTagError(error))
      (error) => dispatch(deleteTag()) // TODO mustafa: hack
    );
  }
}

export function requestGetRepo(repo) {
  return dispatch => {
    dispatch(getRepoStart());
    dispatch(getRepo(repo));

    /*
    return api.getRepo(repo).then(
      () => dispatch(getRepo(repo)),
      (error) => dispatch(getRepoError(error))
    );
    */
  }
}
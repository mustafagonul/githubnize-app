function handleResponse(response) {
  return response.json().then(json => {
    return response.ok ? json : Promise.reject(json);
  });
}

export default class Api {
  constructor(api_url, github_url) {

    this._api_url = api_url;
    this._github_url = github_url;
    this._api_token = null;
    this._github_token = null;
    this._user = null;
  }

  get api_token() {
    return this._api_token;
  }

  get github_token() {
    return this._github_token;
  }

  get user() {
    return this._user;
  }

  set api_token(newToken) {
    this._api_token = newToken;
  }

  set github_token(newToken) {
    this._github_token = newToken;
  }

  set user(user) {
    this._user = user;
  }

  header(token, customHeader) {
    let headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    if (customHeader) {
      headers = {
        ...headers,
        ...customHeader
      };
    }

    return headers;
  }

  api_header(customHeader) {
    return this.header(this._api_token, customHeader);
  }

  github_header(customHeader) {
    return this.header(this._github_token, customHeader);
  }

  getAllstars() {
    return fetch(`${this._github_url}/user/starred`, {
      method: 'GET',
      headers: this.github_header(),
    })
    .then(handleResponse);
  }

  getUntagged() {

  }

  getTags() {
    return fetch(`${this._api_url}/tag`, {
      method: 'GET',
      headers: this.api_header(),
    })
    .then(handleResponse);
  }

  getTag(tag) {
    return fetch(`${this._api_url}/tag/${tag}`, {
      method: 'GET',
      headers: this.api_header(),
    })
    .then(handleResponse);
  }

  addTag(tag) {
    const data = {
      login: this.user,
      name: tag,
    };

    return fetch(`${this._api_url}/tag`, {
      method: 'POST',
      headers: this.api_header(),
      body: JSON.stringify(data),
    })
    .then(handleResponse);
  }

  deleteTag(tag) {
    /*
    const data = {
      login: this.user,
      slug: tag,
    };
    */

    return fetch(`${this._api_url}/tag/${tag}`, {
      method: 'DELETE',
      headers: this.api_header(),
      // body: JSON.stringify(data),
    })
    .then(handleResponse);
  }

  updateTag(tag) {

  }

  getRepo() {

  }


  /*
  getBoardsOfUser(userSlug) {
    return fetch(`${this._url}/${userSlug}/boards`, {
      method: 'get',
      headers: this.header(),
    })
    .then(handleResponse);
  }

  getBoardOfUser(userSlug, boardSlug) {
    return fetch(`${this._url}/${userSlug}/boards/${boardSlug}`, {
      method: 'get',
      headers: this.header(),
    })
    .then(handleResponse);
  }

  getBoard(boardId) {
    return fetch(`${this._url}/boards/${boardId}`, {
      method: 'get',
      headers: this.header(),
    })
    .then(handleResponse);
  }

  saveBoard(board) {
    const id = board._id ? board._id : '';
    return fetch(`${this._url}/boards/${id}`, {
      method: board._id ? 'put' : 'post',
      headers: this.header(),
      body: JSON.stringify(board)
    })
    .then(handleResponse)
    .then(response => {
      return Promise.resolve(response);
    })
    .catch(rejection => {
      return Promise.reject(rejection);
    })
  }

  saveBox(boardId, box) {
    const id = box._id ? box._id : '';
    return fetch(`${this._url}/boards/${boardId}/boxes/${id}`, {
      method: box._id ? 'put' : 'post',
      headers: this.header(),
      body: JSON.stringify(box)
    })
    .then(handleResponse)
    .then(response => {
      return Promise.resolve(response);
    })
    .catch(rejection => {
      return Promise.reject(rejection);
    })
  }

  getTwitter(url, term) {
    const encodedURL = `${this._url}/twitter/${url}?${term}`;
    return fetch(encodedURL, {
      method: 'get',
      headers: this.header(),
    })
    .then(handleResponse);
  }
  */
}

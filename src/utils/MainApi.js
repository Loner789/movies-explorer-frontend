// IMPORTS:
import { mainApiConfig } from './constants';
import { handleResponse } from './utils';

// MAIN-API CLASS:
class MainApi {
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.contentType = data.headers['Content-Type'];
  }

  _request({ url, method = 'POST', token, data }) {
    return fetch(`${this.baseUrl}${url}`, {
      //   credentials: 'include',
      method,
      headers: {
        'Content-Type': this.contentType,
        ...(!!token && { Authorization: `Bearer ${token}` }),
      },
      ...(!!data && { body: JSON.stringify(data) }),
    });
  }

  register(name, email, password) {
    return this._request({
      url: '/signup',
      data: { name, email, password },
    }).then(handleResponse);
  }

  authorize(email, password) {
    return this._request({
      url: '/signin',
      data: { email, password },
    }).then(handleResponse);
  }

  sendToken(token) {
    return this._request({
      url: '/users/me',
      method: 'GET',
      token,
    }).then(handleResponse);
  }

  getUserInfo(token) {
    return this._request({
      url: '/users/me',
      method: 'GET',
      token,
    }).then(handleResponse);
  }

  setUserInfo(name, email, token) {
    return this._request({
      url: '/users/me',
      method: 'PATCH',
      token,
      data: { name, email },
    }).then(handleResponse);
  }

  saveMovie(data, token) {
    return (
      this._request({
        url: '/movies',
        token,
        data: {
          movieId: data.movieId,
          trailerLink: data.trailerLink,
          image: data.image,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
          thumbnail: data.thumbnail,
          country: data.country,
          year: data.year,
          description: data.description,
          director: data.director,
          duration: data.duration,
        },
      })
        // .then((res) => {
        //   return res;
        // })
        .then(handleResponse)
    );
  }

  getSavedMovies(token) {
    return this._request({
      url: '/movies',
      method: 'GET',
      token,
    }).then(handleResponse);
  }

  deleteMovie(id, token) {
    return this._request({
      url: `/movies/${id}`,
      method: 'DELETE',
      token,
    }).then(handleResponse);
  }

  logout() {
    return this._request({
      url: '/signout',
    });
  }
}

const mainApi = new MainApi(mainApiConfig);

export default mainApi;

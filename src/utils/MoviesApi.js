// IMPORTS:
import { moviesApiConfig } from './constants';
import { handleResponse } from './utils';

// MOVIES-API CLASS:
class MoviesApi {
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.headers = data.headers;
  }

  getMovies() {
    return fetch(`${this.baseUrl}`, {
      headers: this.headers,
    }).then(handleResponse);
  }
}

const moviesApi = new MoviesApi(moviesApiConfig);

export default moviesApi;

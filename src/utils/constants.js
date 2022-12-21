// Constants:
const INITIAL_NUMBER_OF_MOVIES_320_480 = 5;
const INITIAL_NUMBER_OF_MOVIES_481_768 = 8;
const INITIAL_NUMBER_OF_MOVIES_769_1280 = 12;
const NUMBER_OF_MOVIES_TO_ADD_320_768 = 2;
const NUMBER_OF_MOVIES_TO_ADD_769_1279 = 3;
const NUMBER_OF_MOVIES_TO_ADD_1280 = 4;
const MAIN_URL = 'https://api.movies-explorer.loner.nomoredomains.club';
const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const MOVIE_CARD_IMAGE_URL = 'https://api.nomoreparties.co/';
const mainApiConfig = {
  baseUrl: MAIN_URL,
  headers: {
    'Content-Type': 'application/json',
  }
};
const moviesApiConfig = {
  baseUrl: MOVIES_URL,
  headers: {
    'Content-Type': 'application/json',
  }
};


export {
  INITIAL_NUMBER_OF_MOVIES_320_480,
  INITIAL_NUMBER_OF_MOVIES_481_768,
  INITIAL_NUMBER_OF_MOVIES_769_1280,
  NUMBER_OF_MOVIES_TO_ADD_320_768,
  NUMBER_OF_MOVIES_TO_ADD_769_1279,
  NUMBER_OF_MOVIES_TO_ADD_1280,
  MAIN_URL,
  MOVIES_URL,
  MOVIE_CARD_IMAGE_URL,
  mainApiConfig,
  moviesApiConfig,
};

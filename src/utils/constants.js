// Constants:
const AUTH_ERROR_MESSAGE = 'При авторизации произошла ошибка. Переданы некорректные данные';
const FORBIDDEN_ERROR_MESSAGE = 'При авторизации произошла ошибка. Передан некорректный токен';
const NOT_FOUND_ERROR_MESSAGE = 'Введён неверный логин или пароль';
const CONFLICT_ERROR_MESSAGE = 'Пользователь с таким email уже существует';
const DEFAULT_ERROR_MESSAGE = 'Произошла ошибка';
const MOVIE_SAVE_ERROR_MESSAGE = 'При сохранении фильма произошла ошибка';
const MOVIE_DELETE_ERROR_MESSAGE = 'При удалении фильма из списка сохранённых фильмов произошла ошибка';
const SERVER_ERROR_MESSAGE = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const FETCH_ERROR_MESSAGE = 'Ошибка подключения к интернету';

const NAME_PATTERN = '^[a-zA-Zа-яА-Я\s-]+$';

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
  AUTH_ERROR_MESSAGE,
  FORBIDDEN_ERROR_MESSAGE,
  NOT_FOUND_ERROR_MESSAGE,
  CONFLICT_ERROR_MESSAGE,
  DEFAULT_ERROR_MESSAGE,
  MOVIE_SAVE_ERROR_MESSAGE,
  MOVIE_DELETE_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
  FETCH_ERROR_MESSAGE,
  NAME_PATTERN,
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

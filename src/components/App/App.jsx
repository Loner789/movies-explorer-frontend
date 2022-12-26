// IMPORTS:
import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import BurgerPopup from '../BurgerPopup/BurgerPopup';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import {
  filterMoviesByName,
  filterMoviesByDuration,
  getErrorCode,
} from '../../utils/utils';
import {
  AUTH_ERROR_MESSAGE,
  FORBIDDEN_ERROR_MESSAGE,
  NOT_FOUND_ERROR_MESSAGE,
  CONFLICT_ERROR_MESSAGE,
  DEFAULT_ERROR_MESSAGE,
  MOVIE_SAVE_ERROR_MESSAGE,
  MOVIE_DELETE_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
  FETCH_ERROR_MESSAGE,
} from '../../utils/constants';

// BASE COMPONENT OF APPLICATION:
function App() {
  // Variables:
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [currentUser, setCurrentUser] = useState({});
  const [isBurgerPopupOpen, setIsBurgerPopupOpen] = useState(false);
  const [isChangingClicked, setIsChangingClicked] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isSavedMoviesShortFilm, setIsSavedMoviesShortFilm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSavedMoviesSearchStarted, setIsSavedMoviesSearchStarted] =
    useState(false);
  const [savedMoviesSearchResult, setSavedMoviesSearchResult] = useState([]);
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSearchStarted, setIsSearchStarted] = useState(false);
  const [isSearchValid, setIsSearchValid] = useState(false);
  const [isSavedMoviesSearchValid, setIsSavedMoviesSearchValid] =
    useState(false);

  // Side-effects:
  useEffect(() => checkToken(), []);

  useEffect(() => {
    if (currentPath !== '/profile' && isProfileUpdated) {
      setIsProfileUpdated(false);
    }
  }, [currentPath]);

  useEffect(() => {
    if (currentPath === '/movies') {
      localStorage.isShortFilm === 'true'
        ? setIsShortFilm(true)
        : setIsShortFilm(false);
      loadSavedMovies();
    }
  }, [currentPath]);

  useEffect(() => {
    setErrorMessage('');
    setIsChangingClicked(false);
  }, [currentPath]);

  // Functions:
  function checkToken() {
    if (localStorage.token) {
      mainApi
        .getUserInfo(localStorage.token)
        .then((data) => {
          data.email === localStorage.getItem('email') && setCurrentUser(data);
        })
        .catch((err) => {
          console.log(err);

          setErrorMessage(DEFAULT_ERROR_MESSAGE);
        });
    }
  }

  function setCurrentUserInfo(token) {
    mainApi
      .getUserInfo(token)
      .then((data) => {
        setCurrentUser(data);
        localStorage.setItem('email', data.email);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(DEFAULT_ERROR_MESSAGE);
      });
  }

  function loadSavedMovies() {
    const token = localStorage.getItem('token');

    setErrorMessage('');
    setIsSavedMoviesShortFilm(false);
    setIsSavedMoviesSearchStarted(false);

    if (token) {
      mainApi
        .getSavedMovies(token)
        .then((data) => {
          setSavedMovies(data);
          setSavedMoviesSearchResult(data);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(DEFAULT_ERROR_MESSAGE);
        });
    }
  }

  function loadMovies() {
    if (localStorage.movies) setMovies(JSON.parse(localStorage.movies));
    localStorage.isShortFilm === 'true'
      ? setIsShortFilm(true)
      : setIsShortFilm(false);
  }

  function handleBurgerButtonClick() {
    setIsBurgerPopupOpen(true);
  }

  function closePopup() {
    setIsBurgerPopupOpen(false);
  }

  function authorizeUser(email, password) {
    return mainApi
      .authorize(email, password)
      .then((data) => {
        if (!data.token) {
          return Promise.reject('No token');
        }
        setCurrentUserInfo(data.token);
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('token', data.token);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);

        const errorCode = getErrorCode(err);

        if (errorCode === '401') setErrorMessage(AUTH_ERROR_MESSAGE);
        else if (errorCode === '403') setErrorMessage(FORBIDDEN_ERROR_MESSAGE);
        else if (errorCode === '404') setErrorMessage(NOT_FOUND_ERROR_MESSAGE);
        else setErrorMessage(DEFAULT_ERROR_MESSAGE);
      });
  }

  function handleRegister(name, email, password) {
    setErrorMessage('');
    setIsLoading(true);

    return mainApi
      .register(name, email, password)
      .then(() => {
        authorizeUser(email, password);
      })
      .catch((err) => {
        console.log(err);

        const errorCode = getErrorCode(err);

        errorCode === '409'
          ? setErrorMessage(CONFLICT_ERROR_MESSAGE)
          : setErrorMessage(DEFAULT_ERROR_MESSAGE);
      })
      .finally(() => setIsLoading(false));
  }

  function handleLogin(email, password) {
    setErrorMessage('');
    setIsLoading(true);

    authorizeUser(email, password).finally(() => setIsLoading(false));
  }

  function handleProfileChange(name, email) {
    setIsChangingClicked(false);

    mainApi
      .setUserInfo(name, email, localStorage.token)
      .then((items) => {
        setCurrentUser(items);
        setIsChangingClicked(false);
        setIsProfileUpdated(true);
      })
      .catch((err) => {
        console.log(err);

        if (err.message) {
          if (err.message === 'Failed to fetch')
            setErrorMessage(FETCH_ERROR_MESSAGE);
          else setErrorMessage(DEFAULT_ERROR_MESSAGE);

          return;
        }

        const errorCode = getErrorCode(err);
        errorCode === '409'
          ? setErrorMessage(CONFLICT_ERROR_MESSAGE)
          : setErrorMessage(DEFAULT_ERROR_MESSAGE);
      });
  }

  function handleProfileEdit() {
    setIsChangingClicked(true);
    setIsProfileUpdated(false);
  }

  function handleLogout() {
    mainApi.logout();
    localStorage.clear();
    setIsBurgerPopupOpen(false);
    setIsFirstVisit(true);
    setIsShortFilm(false);
    setMovies([]);
    setSavedMovies([]);
    setCurrentUser({});
    setErrorMessage('');
    navigate('/');
  }

  function handleMovieLikeToggle(props) {
    setErrorMessage('');

    if (!props.isLiked) {
      mainApi
        .saveMovie(props, localStorage.token)
        .then((data) => {
          movies.forEach((movie) => {
            if (movie.id === data.movieId) {
              movie.isLiked = true;
            }
          });

          setMovies([...movies]);
          localStorage.setItem('movies', JSON.stringify(movies));
          setSavedMovies([...savedMovies, data]);
        })
        .catch((err) => {
          console.log(err);

          setErrorMessage(MOVIE_SAVE_ERROR_MESSAGE);
        });
    } else {
      const selectedMovie = savedMovies.find(
        (item) => item.movieId === props.movieId
      );

      mainApi
        .deleteMovie(selectedMovie._id, localStorage.token)
        .then((data) => {
          const updatedMovies = savedMovies.filter(
            (movie) => movie._id !== data.data._id
          );
          setSavedMovies(updatedMovies);

          movies.forEach((movie) => {
            if (movie.id === data.data.movieId) {
              movie.isLiked = false;
            }
          });
          setMovies([...movies]);
          localStorage.setItem('movies', JSON.stringify(movies));
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(MOVIE_DELETE_ERROR_MESSAGE);
        });
    }
  }

  function handleMovieDelete(props) {
    setErrorMessage('');

    mainApi
      .deleteMovie(props._id, localStorage.token)
      .then((data) => {
        const updatedMovies = savedMovies.filter(
          (movie) => movie._id !== data.data._id
        );
        setSavedMovies(updatedMovies);

        movies.forEach((movie) => {
          if (movie.id === data.data.movieId) {
            movie.isLiked = false;
          }
        });

        setMovies([...movies]);
        localStorage.setItem('movies', JSON.stringify(movies));
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(MOVIE_DELETE_ERROR_MESSAGE);
      });
  }

  function handleMoviesSearch(request) {
    setErrorMessage('');
    setIsLoading(true);
    setMovies([]);

    moviesApi
      .getMovies()
      .then((data) => {
        const foundMovies = filterMoviesByName(data, request);
        const filteredMovies = isShortFilm
          ? filterMoviesByDuration(foundMovies)
          : foundMovies;

        if (savedMovies.length > 0) {
          savedMovies.forEach((item) => {
            filteredMovies.forEach((movie) => {
              if (item.movieId === movie.id) movie.isLiked = true;
            });
          });
        }

        setMovies(filteredMovies);
        setIsFirstVisit(false);
        localStorage.setItem('movies', JSON.stringify(filteredMovies));
        localStorage.setItem('searchRequest', request);
        localStorage.setItem('isShortFilm', isShortFilm);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(SERVER_ERROR_MESSAGE);
      })
      .finally(() => setIsLoading(false));
  }

  function handleMoviesCheckboxChange() {
    if (movies.length === 0) {
      setIsShortFilm(!isShortFilm);

      return;
    }

    if (!isShortFilm) {
      const shortFilm = filterMoviesByDuration(movies);

      setIsShortFilm(true);
      setMovies(shortFilm);

      localStorage.setItem('isShortFilm', true);
      localStorage.setItem('movies', JSON.stringify(shortFilm));
    } else {
      setErrorMessage('');
      setIsLoading(true);
      setMovies([]);
      setIsShortFilm(false);

      moviesApi
        .getMovies()
        .then((data) => {
          const foundMovies = filterMoviesByName(
            data,
            localStorage.searchRequest
          );

          if (savedMovies.length > 0) {
            savedMovies.forEach((item) => {
              foundMovies.forEach((movie) => {
                if (item.movieId === movie.id) movie.isLiked = true;
              });
            });
          }

          setMovies(foundMovies);
          localStorage.setItem('movies', JSON.stringify(foundMovies));
          localStorage.setItem('isShortFilm', false);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(SERVER_ERROR_MESSAGE);
        })
        .finally(() => setIsLoading(false));
    }
  }

  function handleSavedMoviesSearch(request) {
    setErrorMessage('');
    setIsLoading(true);
    setSavedMoviesSearchResult([]);
    localStorage.setItem('savedMoviesSearchRequest', request);

    const foundMovies = filterMoviesByName(savedMovies, request);
    const filteredMovies = isSavedMoviesShortFilm
      ? filterMoviesByDuration(foundMovies)
      : foundMovies;

    setSavedMoviesSearchResult(filteredMovies);
    setIsLoading(false);
  }

  function handleSavedMoviesCheckboxChange() {
    if (savedMovies.length === 0) {
      setIsSavedMoviesShortFilm(!isSavedMoviesShortFilm);

      return;
    }

    if (!isSavedMoviesShortFilm) {
      setIsSavedMoviesSearchStarted(true);
      const shortFilm = filterMoviesByDuration(savedMoviesSearchResult);

      setIsSavedMoviesShortFilm(true);
      setSavedMoviesSearchResult(shortFilm);
    } else {
      setErrorMessage('');
      setIsLoading(true);
      setSavedMoviesSearchResult([]);
      setIsSavedMoviesShortFilm(false);

      const foundMovies = filterMoviesByName(
        savedMovies,
        localStorage.savedMoviesSearchRequest
      );

      setSavedMoviesSearchResult(foundMovies);
      setIsLoading(false);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header currentPath={currentPath} onClick={handleBurgerButtonClick} />
        <Routes>
          <Route path='/' element={<Main />} />

          <Route
            path='/movies'
            element={
              <ProtectedRoute>
                <Movies
                  movies={movies}
                  isShortFilm={isShortFilm}
                  isSearchStarted={isSearchStarted}
                  setIsSearchStarted={setIsSearchStarted}
                  isSearchValid={isSearchValid}
                  setIsSearchValid={setIsSearchValid}
                  currentPath={currentPath}
                  onCheckboxChange={handleMoviesCheckboxChange}
                  onSearch={handleMoviesSearch}
                  isLoading={isLoading}
                  isFirstVisit={isFirstVisit}
                  onMovieLike={handleMovieLikeToggle}
                  errorMessage={errorMessage}
                  loadMovies={loadMovies}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute>
                <SavedMovies
                  movies={savedMovies}
                  currentPath={currentPath}
                  isLoading={isLoading}
                  onCheckboxChange={handleSavedMoviesCheckboxChange}
                  onSearch={handleSavedMoviesSearch}
                  isSearchStarted={isSavedMoviesSearchStarted}
                  isShortFilm={isSavedMoviesShortFilm}
                  setIsSearchStarted={setIsSavedMoviesSearchStarted}
                  savedMoviesSearchResult={savedMoviesSearchResult}
                  onMovieDelete={handleMovieDelete}
                  isSearchValid={isSavedMoviesSearchValid}
                  setIsSearchValid={setIsSavedMoviesSearchValid}
                  errorMessage={errorMessage}
                  loadSavedMovies={loadSavedMovies}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Profile
                  onProfileChange={handleProfileChange}
                  onProfileEdit={handleProfileEdit}
                  onLogout={handleLogout}
                  currentPath={currentPath}
                  isChangingClicked={isChangingClicked}
                  isProfileUpdated={isProfileUpdated}
                  errorMessage={errorMessage}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path='/signup'
            element={
              <Register
                onRegister={handleRegister}
                errorMessage={errorMessage}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path='/signin'
            element={
              <Login
                onLogin={handleLogin}
                errorMessage={errorMessage}
                isLoading={isLoading}
              />
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer currentPath={currentPath} />
      </div>
      <BurgerPopup isOpen={isBurgerPopupOpen} onClose={closePopup} />
    </CurrentUserContext.Provider>
  );
}

export default App;

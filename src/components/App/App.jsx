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
  const [isSavedMovieSearchValid, setIsSavedMoviesSearchValid] =
    useState(false);

  // Side-effects:
  // useEffect(() => checkToken(), []);

  useEffect(() => {
    if (localStorage.token) {
      mainApi
        .getUserInfo(localStorage.token)
        .then((data) => {
          setCurrentUser(data);
          localStorage.setItem('email', data.email);
        })
        .catch((err) => {
          console.log(err);

          setErrorMessage('Произошла ошибка');
        });
    }
  }, []);

  useEffect(() => {
    if (localStorage.movies) setMovies(JSON.parse(localStorage.movies));
    if (localStorage.isShortFilm === 'true') setIsShortFilm(true);
    if (localStorage.isShortFilm === 'false') setIsShortFilm(false);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');

    setErrorMessage('');
    setIsShortFilm(false);
    setIsSavedMoviesSearchStarted(false);

    mainApi
      .getSavedMovies(token)
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage('Произошла ошибка');
      });
  }, []);

  useEffect(() => {
    if (currentPath !== '/profile' && isProfileUpdated) {
      setIsProfileUpdated(false);
    }
  }, [currentPath]);

  useEffect(() => {
    if (currentPath === '/movies') {
      if (localStorage.isShortFilm === 'true') setIsShortFilm(true);
      if (localStorage.isShortFilm === 'false') setIsShortFilm(false);
    }
  }, [currentPath]);

  // Functions:
  // function checkToken() {
  //   if (localStorage.token) {
  //     mainApi
  //       .sendToken(localStorage.token)
  //       .then((data) => {
  //         data.email === localStorage.getItem('email') && navigate('/movies');

  //         // if (data.email === localStorage.getItem('email')) {
  //         //   navigate('/movies');
  //         // }
  //       })
  //       .catch((err) => {
  //         console.log(err);

  //         setErrorMessage('Произошла ошибка');
  //       });
  //   }
  // }

  function handleBurgerButtonClick() {
    setIsBurgerPopupOpen(true);
  }

  function closePopup() {
    setIsBurgerPopupOpen(false);
  }

  function handleRegister(name, email, password) {
    setErrorMessage('');

    return mainApi
      .register(name, email, password)
      .then((data) => {
        // setIsRegistred(true);
        // console.log(data);
        navigate('/signin');
      })
      .catch((err) => {
        console.log(err);

        const errorCode = getErrorCode(err);
        if (errorCode === '404')
          setErrorMessage('Введён неверный логин или пароль');
        else if (errorCode === '401')
          setErrorMessage(
            'При авторизации произошла ошибка. Токен не передан или передан не в том формате'
          );
        else if (errorCode === '403')
          setErrorMessage(
            'При авторизации произошла ошибка. Передан некорректный токен'
          );
        else if (errorCode === '409')
          setErrorMessage('Пользователь с таким email уже существует');
        else setErrorMessage('При регистрации пользователя произошла ошибка');
      });
  }

  function handleLogin(email, password) {
    setErrorMessage('');

    return mainApi
      .authorize(email, password)
      .then((data) => {
        if (!data.token) {
          return Promise.reject('No token');
        }

        localStorage.setItem('loggedIn', true);
        localStorage.setItem('token', data.token);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);

        const errorCode = getErrorCode(err);
        if (errorCode === '404')
          setErrorMessage('Введён неверный логин или пароль');
        else if (errorCode === '401')
          setErrorMessage(
            'При авторизации произошла ошибка. Токен не передан или передан не в том формате'
          );
        else if (errorCode === '403')
          setErrorMessage(
            'При авторизации произошла ошибка. Передан некорректный токен'
          );
        else setErrorMessage('При авторизации произошла ошибка');
      });
  }

  function handleProfileChange(name, email) {
    mainApi
      .setUserInfo(name, email, localStorage.token)
      .then((items) => {
        setCurrentUser(items);
        setIsChangingClicked(false);
        setIsProfileUpdated(true);
      })
      .catch((err) => {
        console.log(err);

        const errorCode = getErrorCode(err);
        errorCode === '409'
          ? setErrorMessage('Пользователь с указанным email уже существует')
          : setErrorMessage('При обновлении профиля произошла ошибка');
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

  function removeMovie(movie, token) {
    const selectedMovie = savedMovies.find(
      (item) => item.movieId === movie.movieId
    );

    mainApi
      .deleteMovie(selectedMovie._id, token)
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
        setErrorMessage('Произошла ошибка');
      });
  }

  function handleMovieLike(props) {
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

          setErrorMessage('При сохранении фильма произошла ошибка');
        });
    } else {
      removeMovie(props, localStorage.token);
    }
  }

  function handleMovieDelete(props) {
    setErrorMessage('');

    removeMovie(props, localStorage.token);
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
        setErrorMessage(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        );
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
          setErrorMessage(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          );
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
                  onMovieLike={handleMovieLike}
                  errorMessage={errorMessage}
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
                  setIsSearchValid={setIsSavedMoviesSearchValid}
                  savedMoviesSearchResult={savedMoviesSearchResult}
                  onMovieDelete={handleMovieDelete}
                  errorMessage={errorMessage}
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
              />
            }
          />
          <Route
            path='/signin'
            element={
              <Login onLogin={handleLogin} errorMessage={errorMessage} />
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

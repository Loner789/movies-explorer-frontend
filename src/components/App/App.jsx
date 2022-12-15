// IMPORTS:
import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import BurgerPopup from '../BurgerPopup/BurgerPopup';
// Remove after review
import { initialMovies } from '../../utils/initialCards';

// BASE COMPONENT OF APPLICATION:
function App() {
  // Variables:
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  // Change after review
  const [currentUser, setCurrentUser] = useState({name: 'Виталий', email: 'email@email.com'});
  const [isBurgerPopupOpen, setIsBurgerPopupOpen] = useState(false);
  const [isChangingClicked, setIsChangingClicked] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // Functions:
  function handleBurgerButtonClick() {
    setIsBurgerPopupOpen(true);
  }

  function closePopup() {
    setIsBurgerPopupOpen(false);
  }

  function handleRegister(name, email, password) {
    console.log(name, email, password);
    navigate('/signin');
  }

  function handleLogin(email, password) {
    console.log(email, password);
    navigate('/movies');
  }

  function handleProfileChange(name, email) {
    setIsChangingClicked(false);
    setIsProfileUpdated(true);
    setCurrentUser(name, email);
  }

  function handleProfileEdit() {
    setIsChangingClicked(true);
    setIsProfileUpdated(false);
  }

  function handleLogout() {
    console.log('Goodbye!');
    navigate('/');
  }

  function handleMovieLikeClick(props) {
    console.log('Click!');
  }

  function handleMovieDeleteClick() {
    console.log('Delete!');
  }

  function handleMoviesCheckboxChange(isShortFilm) {
    console.log(isShortFilm);
    setIsShortFilm(!isShortFilm);
  }

  function handleSavedMoviesCheckboxChange(isShortFilm) {
    console.log(isShortFilm);
    setIsShortFilm(!isShortFilm);
  }

  function handleMoviesSearchForm(data) {
    console.log(data);
  }

  function handleSavedMoviesSearchForm(data) {
    console.log(data);
  }

  // Side-effects:
  useEffect(() => {
    if (currentPath !== '/profile' && isProfileUpdated) {
      setIsProfileUpdated(false);
    }
  }, [currentPath]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header currentPath={currentPath} onClick={handleBurgerButtonClick} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            path='/movies'
            element={
              <Movies
                // Change after review
                movies={initialMovies}
                currentPath={currentPath}
                onCheckboxChange={handleMoviesCheckboxChange}
                onSearch={handleMoviesSearchForm}
                isLoading={isLoading}
                isFirstVisit={isFirstVisit}
                onMovieLike={handleMovieLikeClick}
                errorMessage={errorMessage}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <SavedMovies
              // Change after review
                movies={initialMovies}
                currentPath={currentPath}
                onCheckboxChange={handleSavedMoviesCheckboxChange}
                onSearch={handleSavedMoviesSearchForm}
                isLoading={isLoading}
                isFirstVisit={isFirstVisit}
                onMovieDelete={handleMovieDeleteClick}
                errorMessage={errorMessage}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <Profile
                onProfileChange={handleProfileChange}
                onProfileEdit={handleProfileEdit}
                onLogout={handleLogout}
                currentPath={currentPath}
                isChangingClicked={isChangingClicked}
                isProfileUpdated={isProfileUpdated}
                errorMessage={errorMessage}
              />
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
